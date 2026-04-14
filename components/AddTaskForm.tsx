// components/AddTaskForm.tsx
import { useState } from "react"
import { Priority } from "../types/task"

type AddTaskFormProps = {
  onAddTask: (title: string, priority: Priority) => void
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() === "") return
    onAddTask(title.trim(), priority)
    setTitle("")
    setPriority("medium")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10 pb-8 border-b border-gray-200">
      <div className="space-y-3 mb-5">
        <label htmlFor="task-input" className="block text-sm font-semibold text-gray-700">Add a New Task</label>
        <input
          id="task-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder-gray-400 text-gray-900"
          aria-label="Task title"
        />
      </div>
      <div className="flex gap-4 flex-wrap items-center">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-medium"
          aria-label="Task priority"
          style={{ borderRadius: '6px' }}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-semibold"
          style={{ borderRadius: '6px' }}
          aria-label="Add task"
        >
          Add Task
        </button>
      </div>
    </form>
  )
}