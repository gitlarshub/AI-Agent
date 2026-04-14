// components/TaskList.tsx
import { Task } from "../types/task"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="bg-gray-50 rounded-xl p-16 text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-gray-700 text-2xl font-bold mb-3">No tasks found</p>
          <p className="text-gray-500 text-lg">Try adding a new task or adjusting your filter to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ul className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))}
      </ul>
      <p className="text-gray-500 text-sm text-center py-3">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} displayed
      </p>
    </div>
  )
}