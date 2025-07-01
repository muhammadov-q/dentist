"use client"

import { Home, User, Stethoscope, Phone } from "lucide-react"

interface MenuProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Menu({ activeTab, setActiveTab }: MenuProps) {
  const tabs = [
    { key: "home", icon: Home, label: "Bosh" },
    { key: "about", icon: User, label: "Haqida" },
    { key: "services", icon: Stethoscope, label: "Xizmat" },
    { key: "contact", icon: Phone, label: "Aloqa" },
  ]

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/95 backdrop-blur-md border-t border-gray-200 px-2 py-3">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center justify-center flex-1 py-3 px-2 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-all duration-200 ${isActive ? "text-white mb-1" : "text-gray-500 mb-1"}`}
              />
              <span
                className={`text-xs font-medium transition-all duration-200 ${
                  isActive ? "text-white" : "text-gray-500"
                }`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
