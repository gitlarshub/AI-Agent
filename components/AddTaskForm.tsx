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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder-slate-400 text-slate-900"
        aria-label="Task title"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
        style={{ borderRadius: '6px' }}
        aria-label="Add task"
      >
        Add
      </button>
    </form>
  )
}