# Project Coding Instructions

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: TailwindCSS
- Components: React Functional Components

## Folder Structure

app/
  page.tsx

components/
  TaskList.tsx
  TaskItem.tsx
  AddTaskForm.tsx

types/
  task.ts

## Naming Conventions

Components must use PascalCase.

Example:

TaskItem.tsx

Hooks must use:

useSomething.ts

## Code Rules

- Always use TypeScript types
- Use functional React components
- Keep components small and reusable
- Avoid inline CSS
- Use TailwindCSS classes
- Ensure accessibility (labels, semantic HTML)

## Task Data Structure

Task object:

type Task = {
  id: number
  title: string
  completed: boolean
}

## Generation Workflow

When implementing features:

1. Read the GitHub Issue
2. Extract requirements
3. Create a short implementation plan
4. Identify components needed
5. Generate the components
6. Integrate them into the page
7. Ensure TypeScript compatibility
8. Ensure UI follows Figma design
9. Ensure code compiles without errors

## Testing Rules

- Ensure components render without errors
- Ensure UI interactions work (adding tasks, toggling checkbox)