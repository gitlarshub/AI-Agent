// components/TaskList.tsx
import { Task } from "../.next/types/tasks"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet.</p>
  }

  return (
    <div className="space-y-0">
      <ul className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
        ))}
      </ul>
      <p className="text-slate-500 text-sm mt-4 text-center">
        {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} total
      </p>
    </div>
  )
}