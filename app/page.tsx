// app/page.tsx
"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import StatsCard from "../components/StatsCard"
import SearchBar from "../components/SearchBar"
import AddTaskForm from "../components/AddTaskForm"
import DetailedTaskItem from "../components/DetailedTaskItem"
import { Task, FilterType, Priority, Category } from "../types/task"

const STORAGE_KEY = "tasks"

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  const addTask = (title: string, description: string, priority: Priority, dueDate: string, category: Category) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
      priority,
      dueDate,
      category,
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

  // Filter tasks based on the selected filter and search query
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "all" || (filter === "active" && !task.completed) || (filter === "completed" && task.completed)
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Calculate stats
  const totalTasks = tasks.length
  const pendingTasks = tasks.filter(t => !t.completed).length
  const completedTasks = tasks.filter(t => t.completed).length

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="px-4 sm:px-8 lg:px-12 xl:px-16 py-12">
        {/* Title Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">My Tasks</h1>
            <p className="text-gray-600">Manage your daily tasks and stay organized</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-semibold flex items-center gap-2"
          >
            + Add New Task
          </button>
        </div>

        {/* Filter and Sort */}
        <div className="mb-8 flex gap-4 items-center flex-wrap">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-medium"
          >
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-medium">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <StatsCard
            icon={<span className="text-2xl">📋</span>}
            label="Total Tasks"
            value={totalTasks}
            bgColor="bg-gray-100"
          />
          <StatsCard
            icon={<span className="text-2xl">⏱️</span>}
            label="Pending"
            value={pendingTasks}
            bgColor="bg-yellow-100"
          />
          <StatsCard
            icon={<span className="text-2xl">✓</span>}
            label="Completed"
            value={completedTasks}
            bgColor="bg-green-100"
          />
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Tasks List */}
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg font-semibold mb-2">No tasks found</p>
            <p className="text-gray-500">Try adding a new task or adjusting your filters</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <DetailedTaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
            <p className="text-gray-500 text-sm text-center pt-8">
              {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} displayed
            </p>
          </div>
        )}
      </div>

      {/* Add Task Modal */}
      <AddTaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onAddTask={addTask} />
    </main>
  )
}