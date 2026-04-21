export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg font-bold text-sm">
                            ▤ TaskFlow
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <button className="text-gray-600 hover:text-gray-900 text-xl">
                            🔔
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 text-xl">
                            👤
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
