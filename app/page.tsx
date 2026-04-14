// app/page.tsx
"use client"

import { useState } from "react"
import AddTaskForm from "../components/AddTaskForm"
import TaskList from "../components/TaskList"
import { Task } from "../.next/types/tasks"

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl p-8 sm:p-10" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Task Manager</h1>
            <p className="text-slate-500 text-sm">Manage your tasks effortlessly</p>
          </header>
          <AddTaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>
      </div>
    </main>
  )
}