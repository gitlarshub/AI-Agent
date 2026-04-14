import { Task } from "../types/task"
import PriorityBadge from "./PriorityBadge"

type DetailedTaskItemProps = {
    task: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export default function DetailedTaskItem({ task, onToggle, onDelete }: DetailedTaskItemProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
                {/* Checkbox */}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-6 h-6 text-blue-600 rounded cursor-pointer border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 flex-shrink-0"
                    aria-label={`Mark "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className={`text-base font-semibold mb-1 ${task.completed ? "line-through text-gray-400" : "text-gray-900"}`}>
                        {task.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-3 ${task.completed ? "text-gray-400" : "text-gray-600"}`}>
                        {task.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 flex-wrap text-xs text-gray-500">
                        <span>Due: {task.dueDate}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-medium">{task.category}</span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Priority Badge */}
                    {!task.completed && <PriorityBadge priority={task.priority} />}
                    {task.completed && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                            Completed
                        </span>
                    )}

                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(task.id)}
                        className="text-gray-400 hover:text-red-600 p-2"
                        aria-label={`Delete "${task.title}"`}
                    >
                        ⋮
                    </button>
                </div>
            </div>
        </div>
    )
}
