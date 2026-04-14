import { FilterType } from "../types/task"

type FilterButtonsProps = {
    activeFilter: FilterType
    onFilterChange: (filter: FilterType) => void
}

export default function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
    const filters: { label: string; value: FilterType }[] = [
        { label: "All", value: "all" },
        { label: "Active", value: "active" },
        { label: "Completed", value: "completed" },
    ]

    return (
        <div className="flex gap-2 mb-6">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`px-4 py-2 rounded font-medium transition-colors ${activeFilter === filter.value
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    style={{ borderRadius: "6px" }}
                    aria-pressed={activeFilter === filter.value}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}
