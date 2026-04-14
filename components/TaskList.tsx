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
      <div className="bg-slate-50 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-slate-600 text-lg font-semibold mb-2">No tasks found</p>
          <p className="text-slate-500 text-base">Try adding a new task or adjusting your filter to get started</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ul className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))}
      </ul>
      <p className="text-slate-500 text-sm text-center py-2">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} displayed
      </p>
    </div>
  )
}