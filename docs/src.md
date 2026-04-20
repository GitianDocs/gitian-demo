---
title: Source Directory
tags: [directory-doc, source, architecture]
---

# src/

The main application source directory for the todo app. Built with **React 19**, **TypeScript**, and **Vite**.

## Component Architecture

```
src/
├── App.tsx              Root component — composes everything
├── main.tsx             ReactDOM entry point
├── types.ts             Shared Todo interface
├── components/
│   ├── TodoList.tsx     Renders sorted list of todos
│   ├── TodoItem.tsx     Single todo with toggle + delete
│   └── AddTodo.tsx      Controlled form for new todos
└── hooks/
    └── useTodos.ts      State + localStorage persistence
```

## Data Flow

All state lives in the `useTodos` hook. The `App` component destructures its return value and passes handlers down as props:

```
useTodos → App → AddTodo (addTodo)
               → TodoList → TodoItem (toggleTodo, deleteTodo)
```

> [!note]
> This is a **directory documentation** file. It lives at `docs/src.md` and is associated with the `src/` directory. In the sidebar, directories with documentation show a book icon.

## Key Files

| File          | Role                                    |
| ------------- | --------------------------------------- |
| `App.tsx`     | Orchestrates layout and passes state    |
| `useTodos.ts` | Single source of truth for todo state   |
| `types.ts`    | Shared `Todo` interface used everywhere |
