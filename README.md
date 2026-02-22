---
title: Gitian Demo
description: A demo repository showcasing every Gitian feature
tags: [demo, react, todo, gitian]
---

# Gitian Demo

A minimal React todo app built to showcase every feature of [Gitian](https://gitian.dev) — the Obsidian-powered documentation layer for GitHub repositories.

## Tech Stack

| Technology | Version | Purpose |
|:-----------|:-------:|--------:|
| React | 19 | UI framework |
| TypeScript | 5.6 | Type safety |
| Vite | 6 | Build tool |

## What This Repo Demonstrates

This repository is a **living feature demo**. Browse it through Gitian to see:

- **Vault discovery** — three nested `.obsidian/` vaults (root, `docs/`, `examples/`)
- **File documentation** — click any source file to see its Docs tab
- **Directory documentation** — click `src/` or `docs/` to read their guides
- **@gitian annotations** — inline docs rendered alongside source code
- **Rich markdown** — callouts, math, Mermaid diagrams, and more

## Quick Start

```bash
npm install
npm run dev
```

## Documentation

- [[docs/features]] — Full feature showcase (callouts, math, Mermaid, tables)
- [[docs/architecture]] — Component tree and data flow diagrams
- [[docs/getting-started]] — Step-by-step setup guide

## Project Structure

```
src/
├── App.tsx            Main application component
├── main.tsx           Entry point
├── types.ts           Todo data model
├── components/
│   ├── TodoList.tsx   List rendering with sort
│   ├── TodoItem.tsx   Individual todo with toggle/delete
│   └── AddTodo.tsx    Controlled form input
└── hooks/
    └── useTodos.ts    State management + localStorage
```

## License

MIT
