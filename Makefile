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
