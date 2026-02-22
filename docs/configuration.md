---
title: Configuration Reference
description: Complete reference for .gitian/config.yaml
tags: [reference, config]
---

# Configuration Reference

Customize Gitian behavior by adding a `.gitian/config.yaml` file to your repository root. All fields are optional — missing values use sensible defaults.

## Complete example

```yaml
annotations:
  anchor: gitian
  render_style: nested
  detect_docs: false
  detect_keywords: false
  tags:
    todo:
      kind: marker
      color: "#f59e0b"
      label: "To Do"
      urgency: normal
      groups: ""
      pinned: false
    api:
      kind: inline
      color: "#60a5fa"
      label: API
      urgency: normal
      groups: api,global
      pinned: false

discovery:
  docs_dirs: docs,.docs

groups:
  auth:
    color: "#10b981"
    label: Authentication
    pinned: false
  global:
    color: "#3b82f6"
    label: Global
    pinned: true

files:
  hide_source_only: false

pr_analysis:
  enabled: true
  stats:
    summary_table: true
    annotation_diffs: true
    alert_tags: true
    todo_trend: true
    groups_affected: true
    orphaned_docs: true
```

## annotations

Top-level section controlling how Gitian detects and renders annotations.

### anchor

**Default:** `gitian`

The base name used in annotation comments. With the default, you write `@gitian:tag`. If you set `anchor: myteam`, annotations become `@myteam:tag`.

Must match `[a-zA-Z][a-zA-Z0-9-]*` (letters, digits, hyphens; must start with a letter).

### render_style

**Default:** `nested`

How annotations display in the file viewer.

| Value | Description |
|-------|-------------|
| `nested` | Annotations render inline next to the code they annotate |
| `flat` | Annotations render in a flat list below the file |

### detect_docs

**Default:** `false`

When enabled, Gitian detects doc comment tags (`@param`, `@returns`, `@deprecated`, etc.) inside `/** */` and `///` comment blocks. These render with muted styling and no code capture.

### detect_keywords

**Default:** `false`

When enabled, Gitian detects bare keywords (`TODO`, `FIXME`, `HACK`, `XXX`, `BUG`, `OPTIMIZE`) in comments. These render with muted styling and no code capture.

### tags

Define custom annotation tags or override built-in tag behavior. Each tag has these fields:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `kind` | string | `block` | `marker` (collapsible list), `inline` (card without code), `block` (card with code capture) |
| `color` | string | `#9ca3af` | Hex color for the tag badge and highlights |
| `label` | string | tag name | Display label shown in the UI |
| `urgency` | string | `normal` | `low`, `normal`, `high`, `critical` — affects sort order |
| `groups` | string | `""` | Comma-separated default groups (e.g. `api,global`) |
| `pinned` | boolean | `false` | When true, annotations with this tag appear on the repo dashboard |

#### Built-in tags

| Tag | Kind | Color | Pinned |
|-----|------|-------|--------|
| `todo` | marker | `#f59e0b` (amber) | no |
| `note` | block | `#3b82f6` (blue) | no |
| `warning` | block | `#f97316` (orange) | no |
| `deprecated` | block | `#6b7280` (gray) | no |
| `security` | block | `#ef4444` (red) | no |
| `bug` | block | `#ef4444` (red) | yes |
| `perf` | block | `#8b5cf6` (purple) | no |

## discovery

### docs_dirs

**Default:** `docs,.docs`

Comma-separated directory names that Gitian scans for documentation files. Directories at any level of the repository tree are detected.

## groups

Define named groups for organizing annotations. Annotations can be assigned to groups via `--group=name` metadata or via tag config `groups` field.

Each group has:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `color` | string | required | Hex color for the group badge |
| `label` | string | group name | Display label shown in the UI |
| `pinned` | boolean | `false` | When true, the group's annotations appear on the repo dashboard |

#### Built-in groups

| Group | Color | Pinned |
|-------|-------|--------|
| `global` | `#3b82f6` (blue) | yes |

## files

### hide_source_only

**Default:** `false`

When true, files that have no documentation (no doc file, no annotations) are hidden from the file tree.

## pr_analysis

See [[pr-analysis]] for the full PR analysis reference.
