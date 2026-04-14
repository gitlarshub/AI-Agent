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

# UI Layout Rules - Always Follow These

When creating or modifying any UI screen (especially Task Manager or dashboard pages):

- Always wrap the main content in a centered container: Use `max-w-4xl mx-auto` (or max-w-5xl) + `px-4 sm:px-6 lg:px-8`.
- Outer page wrapper: `min-h-screen bg-gray-50 py-8` or `py-10`.
- All major sections (header, form, task list, empty state) must be inside a clean white card: `bg-white rounded-2xl shadow-sm p-6` or `p-8`.
- Never let content stretch full-width or stick to the left/top edge. Always add generous breathing room and horizontal centering.
- Make the layout feel modern, airy and balanced – similar to premium task apps like Todoist or Notion.
- For empty states: Center the message nicely inside the white card with larger text and good spacing.

These rules have highest priority. Never ignore them, even if the user prompt doesn't mention layout.

## Testing Rules

- Ensure components render without errors
- Ensure UI interactions work (adding tasks, toggling checkbox)