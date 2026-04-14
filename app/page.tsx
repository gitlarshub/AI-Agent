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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
          <header className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">Task Manager</h1>
            <p className="text-gray-500 text-lg">Organize and track your tasks with ease</p>
          </header>
          <AddTaskForm onAddTask={addTask} />
          <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
          <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
        </div>
      </div>
    </main>
  )
}