---
title: Getting Started
description: Quick start guide for using Gitian with your repository
tags: [guide, getting-started]
---

# Getting Started

Gitian turns your code comments and markdown files into browsable, connected documentation — right from your GitHub repo.

## 1. Sign in

Sign in at [gitian.dev](https://gitian.dev) with your GitHub account.

## 2. Install the GitHub App

Install the Gitian GitHub App on the repo (or org) you want to document. Your repo will appear on your dashboard.

> [!tip]
> Public repos work without installing the app — just navigate to them directly.

## 3. Add your first annotation

Add a comment to any source file using the `@gitian:tag` syntax:

```typescript
// @gitian:note
// This module handles OAuth token refresh.
// Tokens are cached in memory and refreshed
// 5 minutes before expiry.
export async function refreshToken(token: Token) {
  // ...
}
```

Commit and push. Gitian picks it up automatically.

## 4. Add documentation

Create a `docs/` directory in your repo and add markdown files. Gitian discovers them automatically and renders them with full Obsidian-flavored markdown support.

See [[configuration]] for all config options, [[annotations]] for the full annotation reference, and [[markdown]] for supported markdown features.

## Built-in tags

| Tag | Kind | Description |
|-----|------|-------------|
| `todo` | marker | Collapsible task list |
| `note` | block | General documentation |
| `warning` | block | Potential issues |
| `deprecated` | block | Deprecated code |
| `security` | block | Security concerns |
| `bug` | block | Bug reports |
| `perf` | block | Performance notes |

## Optional configuration

Add a `.gitian/config.yaml` to customize behavior — custom tags, colors, groups, detection settings, and more. See [[configuration]] for the full reference.
