// components/TaskItem.tsx
import { Task } from "../.next/types/tasks"

type TaskItemProps = {
    task: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <li
            className={`flex items-center justify-between px-5 py-4 transition-colors duration-200 ${task.completed
                    ? "bg-slate-50 hover:bg-slate-100"
                    : "bg-white hover:bg-slate-50"
                }`}
        >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5 text-blue-600 rounded cursor-pointer border-slate-300 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
                    aria-label={`Mark "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
                />
                <span className={`flex-1 text-base transition-all duration-200 truncate ${task.completed
                        ? "line-through text-slate-400"
                        : "text-slate-900"
                    }`}>
                    {task.title}
                </span>
            </div>
            <button
                onClick={() => onDelete(task.id)}
                className="ml-3 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:shadow-sm active:scale-95 flex-shrink-0"
                aria-label={`Delete "${task.title}"`}
            >
                Delete
            </button>
        </li>
    )
}