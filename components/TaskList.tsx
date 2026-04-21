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
      <div className="text-center py-12">
        <p className="text-gray-700 text-lg font-semibold mb-2">No tasks found</p>
        <p className="text-gray-500 text-base">Try adding a new task or adjusting your filter to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ul className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200 shadow-sm">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))}
      </ul>
      <p className="text-gray-500 text-sm text-center py-2">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} displayed
      </p>
    </div>
  )
}