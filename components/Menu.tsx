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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 max-w-md mx-auto ">
      <div className="flex justify-between items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex flex-col items-center justify-center flex-1 py-2"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              />
              <span
                className={`text-[11px] mt-1 ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-500"
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
