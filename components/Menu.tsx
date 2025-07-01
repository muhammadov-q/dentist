"use client"

import { Home, User, Stethoscope, Phone } from "lucide-react"

interface MenuProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Menu({ activeTab, setActiveTab }: MenuProps) {
  const tabs = [
    {
      key: "home",
      icon: Home,
      label: "Bosh",
      activeColor: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      key: "about",
      icon: User,
      label: "Haqida",
      activeColor: "bg-cyan-500",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      key: "services",
      icon: Stethoscope,
      label: "Xizmat",
      activeColor: "bg-teal-500",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      key: "contact",
      icon: Phone,
      label: "Aloqa",
      activeColor: "bg-indigo-500",
      gradient: "from-indigo-500 to-blue-500",
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 px-2 py-3 max-w-md mx-auto">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all duration-300 active:scale-95 ${
                isActive
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg transform scale-105`
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? "animate-pulse" : ""}`} />
              <span className={`text-xs font-medium ${isActive ? "font-semibold" : ""}`}>{tab.label}</span>
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
