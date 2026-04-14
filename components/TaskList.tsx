// components/TaskList.tsx
import { Task } from "../.next/types/tasks"
import TaskItem from "./TaskItem"

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: number) => void
}

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet.</p>
  }

  return (
    <ul className="border rounded divide-y">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </ul>
  )
}