import { ReactNode } from "react"

type StatsCardProps = {
    icon: ReactNode
    label: string
    value: number
    bgColor: string
}

export default function StatsCard({ icon, label, value, bgColor }: StatsCardProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-4">
                <div className={`${bgColor} p-3 rounded-lg`}>
                    {icon}
                </div>
                <div>
                    <p className="text-gray-600 text-sm font-medium">{label}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                </div>
            </div>
        </div>
    )
}
