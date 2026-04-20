.PHONY: dev build preview install help

.DEFAULT_GOAL := help

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

install:
	npm install

help:
	@echo "Demo App"
	@echo ""
	@echo "  make dev       Vite dev server"
	@echo "  make build     Production build"
	@echo "  make preview   Preview production build"
	@echo "  make install   Install dependencies"
