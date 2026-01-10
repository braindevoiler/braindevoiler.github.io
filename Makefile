.PHONY: help build deploy clean

# Default target
.DEFAULT_GOAL := help

# Color output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m # No Color

help: ## Show available commands
	@echo "$(BLUE)Portfolio Build & Deploy Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-10s$(NC) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(BLUE)Prerequisites:$(NC) Docker (with Compose plugin)"
	@echo "$(YELLOW)Main command:$(NC) make deploy"

build: ## Build production site
	@echo "$(BLUE)Building production site...$(NC)"
	@rm -rf out
	@docker compose build build
	@CONTAINER_ID=$$(docker create braindevoilergithubio-build); \
	docker cp $$CONTAINER_ID:/app/out ./out; \
	docker rm $$CONTAINER_ID > /dev/null
	@touch out/.nojekyll
	@echo 'ankurgupta.net' > out/CNAME
	@echo "$(GREEN)✓ Build complete! Output in ./out$(NC)"

deploy: ## Build and deploy to GitHub Pages
	@echo "$(BLUE)Step 1: Saving changes to main branch...$(NC)"
	@rm -rf out 2>/dev/null || true
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "$(YELLOW)Committing changes to main branch...$(NC)"; \
		git add .; \
		git commit -m "Update content - $$(date '+%Y-%m-%d %H:%M:%S')"; \
		echo "$(YELLOW)Pushing main branch...$(NC)"; \
		git push origin main; \
		echo "$(GREEN)✓ Main branch updated$(NC)"; \
	else \
		echo "$(GREEN)✓ No changes to commit on main branch$(NC)"; \
	fi
	@echo ""
	@echo "$(BLUE)Step 2: Building production site...$(NC)"
	@$(MAKE) build
	@if [ ! -d "out" ]; then \
		echo "$(YELLOW)Error: out/ directory not found$(NC)"; \
		exit 1; \
	fi
	@echo ""
	@echo "$(BLUE)Step 3: Deploying to gh-pages branch...$(NC)"
	@echo "$(YELLOW)Creating gh-pages branch...$(NC)"
	@git branch -D gh-pages 2>/dev/null || true
	@git checkout --orphan gh-pages
	@git rm -rf . 2>/dev/null || true
	@sudo rm -rf node_modules .next 2>/dev/null || rm -rf node_modules .next
	@cp -r out/. .
	@rm -rf out
	@git add .
	@git commit -m "Deploy to GitHub Pages - $$(date '+%Y-%m-%d %H:%M:%S')"
	@echo "$(YELLOW)Pushing to gh-pages branch...$(NC)"
	@git push origin gh-pages --force
	@git checkout main
	@npm ci --silent
	@echo ""
	@echo "$(GREEN)✓ Deployed successfully!$(NC)"
	@echo "$(BLUE)Both branches updated:$(NC)"
	@echo "  • main branch: Source code saved"
	@echo "  • gh-pages branch: Production site deployed"
	@echo "$(BLUE)Your site will be live at:$(NC) https://braindevoiler.github.io"
	@echo "$(YELLOW)Note:$(NC) First deployment may take 2-3 minutes to go live"

clean: ## Remove build artifacts
	@echo "$(YELLOW)Cleaning...$(NC)"
	@rm -rf .next out
	@docker compose down -v 2>/dev/null || true
	@echo "$(GREEN)✓ Clean!$(NC)"
