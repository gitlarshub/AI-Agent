export type Priority = "low" | "medium" | "high"

export type Task = {
    id: number
    title: string
    completed: boolean
    priority: Priority
}

export type FilterType = "all" | "active" | "completed"
