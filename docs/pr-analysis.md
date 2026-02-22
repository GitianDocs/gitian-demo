---
title: PR Analysis
description: Automatic annotation-aware PR comments
tags: [reference, pr-analysis, github]
---

# PR Analysis

Gitian can automatically analyze pull requests and post a summary comment with annotation statistics. Enable it in `.gitian/config.yaml`:

```yaml
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

## Stats plugins

Each stat can be individually enabled or disabled:

| Plugin | Description |
|--------|-------------|
| `summary_table` | Overview table with annotation counts by tag |
| `annotation_diffs` | Shows annotations added, removed, or modified in the PR |
| `alert_tags` | Highlights high-urgency annotations (security, bug) |
| `todo_trend` | Tracks todo count changes over time |
| `groups_affected` | Lists which annotation groups were touched |
| `orphaned_docs` | Detects doc files whose source files were deleted |

## How it works

When a PR is opened or updated, the Gitian GitHub App:

1. Fetches the PR diff and changed files
2. Parses annotations in both the base and head commits
3. Runs each enabled stat plugin
4. Posts (or updates) a summary comment on the PR

Requires the Gitian GitHub App to be installed with PR read/write permissions.
