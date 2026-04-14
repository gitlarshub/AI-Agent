// components/TaskItem.tsx
import { Task } from "../.next/types/tasks"

type TaskItemProps = {
    task: Task
    onToggle: (id: number) => void
}

export default function TaskItem({ task, onToggle }: TaskItemProps) {
    return (
        <li
            className={`flex items-center justify-between p-2 border-b ${task.completed ? "bg-gray-100 line-through text-gray-500" : ""
                }`}
        >
            <span>{task.title}</span>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="w-4 h-4"
            />
        </li>
    )
}