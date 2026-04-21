type SearchBarProps = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search tasks..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
            </span>
        </div>
    )
}
