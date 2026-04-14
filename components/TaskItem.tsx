// components/TaskItem.tsx
import { Task } from "../types/task"
import PriorityBadge from "./PriorityBadge"

type TaskItemProps = {
    task: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <li
            className={`flex items-center justify-between px-6 py-5 transition-colors ${task.completed
                ? "bg-gray-50"
                : "bg-white hover:bg-gray-50"
                }`}
        >
            <div className="flex items-center gap-4 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5 text-blue-600 rounded cursor-pointer border-gray-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 flex-shrink-0"
                    aria-label={`Mark "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
                />
                <span className={`flex-1 text-base truncate font-medium ${task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-900"
                    }`}>
                    {task.title}
                </span>
            </div>
            <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                {task.completed ? (
                    <span className="px-4 py-2 rounded text-xs font-bold bg-gray-200 text-gray-700" style={{ borderRadius: '6px' }}>
                        Completed
                    </span>
                ) : (
                    <PriorityBadge priority={task.priority} />
                )}
                <button
                    onClick={() => onDelete(task.id)}
                    className="bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 px-4 py-2 rounded text-sm font-semibold transition-colors"
                    style={{ borderRadius: '6px' }}
                    aria-label={`Delete "${task.title}"`}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}