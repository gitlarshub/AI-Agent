export type Priority = "low" | "medium" | "high"

export type Category = "Work" | "Personal" | "Shopping" | "Health" | "Other"

export type Task = {
    id: number
    title: string
    description: string
    completed: boolean
    priority: Priority
    dueDate: string
    category: Category
}

export type FilterType = "all" | "active" | "completed"
