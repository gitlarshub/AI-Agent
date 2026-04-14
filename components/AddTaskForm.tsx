// components/AddTaskForm.tsx
import { useState } from "react"

type AddTaskFormProps = {
  onAddTask: (title: string) => void
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() === "") return
    onAddTask(title.trim())
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 placeholder-slate-400 text-slate-900 transition-colors"
        aria-label="Task title"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md active:scale-95"
        aria-label="Add task"
      >
        Add
      </button>
    </form>
  )
}