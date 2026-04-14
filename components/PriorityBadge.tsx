import { Priority } from "../types/task"

type PriorityBadgeProps = {
    priority: Priority
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
    const priorityStyles = {
        high: "bg-red-100 text-red-700",
        medium: "bg-amber-100 text-amber-700",
        low: "bg-green-100 text-green-700",
    }

    const priorityLabels = {
        high: "High",
        medium: "Medium",
        low: "Low",
    }

    return (
        <span
            className={`px-4 py-2 rounded text-xs font-bold ${priorityStyles[priority]}`}
            style={{ borderRadius: "6px" }}
        >
            {priorityLabels[priority]}
        </span>
    )
}
