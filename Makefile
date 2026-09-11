.PHONY: install dev build preview clean check help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort \
	  | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: install ## Run the dev server
	npm run dev

build: install ## Build into docs/ (what GitHub Pages serves)
	npm run build

preview: build ## Serve the built output locally
	npm run preview

check: ## Verify the built payload looks like a site
	@test -f docs/index.html || { echo "refusing: no docs/index.html — nothing built"; exit 1; }
	@test -f docs/.nojekyll || { echo "refusing: no docs/.nojekyll — Pages would run Jekyll"; exit 1; }
	@test -f docs/legal.html || { echo "refusing: no docs/legal.html — the footer links terms that would 404"; exit 1; }
	@echo "docs/ looks publishable"

clean: ## Remove dependencies and build output
	rm -rf node_modules docs

# ── edge deploy ──────────────────────────────────────────────────────────────
# agenticdatasets.org is served by Caddy on the Toronto edge, from one tree:
# the org site at the apex, showcase/ and reference/ beneath it. Each repo
# owns its own subtree. The vhost side lives in the edge host's own
# provisioning repo, in tools/edge-sites.sh.
EDGE        ?= root@172.105.24.72
REMOTE_ROOT ?= /var/www/agenticdatasets
RSYNC_FLAGS := -az --delete --chmod=D755,F644 --exclude .git --exclude .keep
#
# --delete is scoped to what THIS repo owns. Every subtree below is published
# from a different repository into the same document root, so an unexcluded
# one is deleted by the next deploy of this site -- silently, and with no
# error, because rsync is doing exactly what it was told. `vision/` was
# missing here and a deploy would have removed it in full.
#
# Adding a subtree to the root means adding it here in the same change.
RSYNC_FLAGS += --exclude /showcase     # agentic-datasets/showcase
RSYNC_FLAGS += --exclude /reference    # agentic-datasets/reference
RSYNC_FLAGS += --exclude /vision       # the Agentic Vision site
RSYNC_FLAGS += --exclude /qubit        # the Agentic Qubit site

.PHONY: deploy deploy-dry

deploy: build ## Publish the org site to the edge
	@test -f docs/index.html || { echo "refusing: no docs/index.html -- build first" >&2; exit 1; }
	rsync $(RSYNC_FLAGS) docs/ $(EDGE):$(REMOTE_ROOT)/
	@echo "→ https://agenticdatasets.org/"

deploy-dry: build ## Show what deploy would change, without changing it
	rsync -n -v $(RSYNC_FLAGS) docs/ $(EDGE):$(REMOTE_ROOT)/
