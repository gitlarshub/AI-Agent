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
            className={`flex items-center justify-between px-4 py-3 ${task.completed
                ? "bg-slate-50"
                : "bg-white"
                }`}
        >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5 text-blue-600 rounded cursor-pointer border-slate-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 flex-shrink-0"
                    aria-label={`Mark "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
                />
                <span className={`flex-1 text-base truncate ${task.completed
                    ? "line-through text-slate-400"
                    : "text-slate-900"
                    }`}>
                    {task.title}
                </span>
            </div>
            <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                {task.completed ? (
                    <span className="px-3 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-600" style={{ borderRadius: '6px' }}>
                        Completed
                    </span>
                ) : (
                    <PriorityBadge priority={task.priority} />
                )}
                <button
                    onClick={() => onDelete(task.id)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-700 px-3 py-2 rounded text-sm font-medium"
                    style={{ borderRadius: '6px' }}
                    aria-label={`Delete "${task.title}"`}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}