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
        <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b border-gray-200">
            <div className="flex gap-3">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => onFilterChange(filter.value)}
                        className={`px-6 py-2 rounded font-semibold transition-colors ${activeFilter === filter.value
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        style={{ borderRadius: "6px" }}
                        aria-pressed={activeFilter === filter.value}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
