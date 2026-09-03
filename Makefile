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
	@echo "docs/ looks publishable"

clean: ## Remove dependencies and build output
	rm -rf node_modules docs

# ── edge deploy ──────────────────────────────────────────────────────────────
# agenticdatasets.org is served by Caddy on the Toronto edge, from one tree:
# the org site at the apex, showcase/ and reference/ beneath it. Each repo
# owns its own subtree; see dk-semantic-backend-host/tools/edge-sites.sh for
# the vhost side.
EDGE        ?= root@172.105.24.72
REMOTE_ROOT ?= /var/www/agenticdatasets
RSYNC_FLAGS := -az --delete --chmod=D755,F644 --exclude .git --exclude .keep
RSYNC_FLAGS += --exclude /showcase --exclude /reference   # other repos own these

.PHONY: deploy deploy-dry

deploy: build ## Publish the org site to the edge
	@test -f docs/index.html || { echo "refusing: no docs/index.html -- build first" >&2; exit 1; }
	rsync $(RSYNC_FLAGS) docs/ $(EDGE):$(REMOTE_ROOT)/
	@echo "→ https://agenticdatasets.org/"

deploy-dry: build ## Show what deploy would change, without changing it
	rsync -n -v $(RSYNC_FLAGS) docs/ $(EDGE):$(REMOTE_ROOT)/
