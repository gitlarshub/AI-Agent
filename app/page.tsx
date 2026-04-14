// app/page.tsx
"use client"

import { useState, useEffect } from "react"
import AddTaskForm from "../components/AddTaskForm"
import TaskList from "../components/TaskList"
import FilterButtons from "../components/FilterButtons"
import { Task, FilterType } from "../types/task"

const STORAGE_KEY = "tasks"

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>("all")
  const [mounted, setMounted] = useState(false)

  // Load tasks from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setTasks(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error)
    }
    setMounted(true)
  }, [])

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
      } catch (error) {
        console.error("Failed to save tasks to localStorage:", error)
      }
    }
  }, [tasks, mounted])

  const addTask = (title: string, priority: "low" | "medium" | "high" = "medium") => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      priority,
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

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section - Full Width */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">Task Manager</h1>
            <p className="text-gray-500 text-lg">Organize and track your tasks with ease</p>
          </div>
        </div>
      </header>

      {/* Content Section - Full Width */}
      <div className="px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
        <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10">
          <AddTaskForm onAddTask={addTask} />
          <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
          <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>
      </div>
    </main>
  )
}