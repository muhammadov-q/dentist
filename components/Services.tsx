"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Calendar, Phone, CheckCircle } from "lucide-react"
import { getIcon } from "../utils/icons"
import type { Service } from "../types"

interface ServicesProps {
  services: Service[]
  selectedService: Service | null
  showServiceDrawer: boolean
  onServiceClick: (service: Service) => void
  onCloseDrawer: () => void
  onBooking: () => void
  onCall: () => void
}

export default function Services({
  services,
  selectedService,
  showServiceDrawer,
  onServiceClick,
  onCloseDrawer,
  onBooking,
  onCall,
}: ServicesProps) {
  return (
    <>
      <div className="px-4 space-y-4 pb-6 pt-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Xizmatlar</h2>
          <p className="text-sm text-gray-600 mt-1">To'liq tish parvarishi</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="border border-gray-200 rounded-2xl bg-white active:scale-95 transition-transform cursor-pointer"
              onClick={() => onServiceClick(service)}
            >
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                >
                  <div className="text-white">{getIcon(service.icon, "w-8 h-8")}</div>
                </div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{service.shortDesc}</p>
                <div className="text-sm font-semibold text-blue-600">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Drawer */}
      {showServiceDrawer && selectedService && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40 max-w-md mx-auto" onClick={onCloseDrawer}></div>

          {/* Drawer */}
          <div
            className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-w-md mx-auto transform transition-transform duration-300 ${showServiceDrawer ? "translate-y-0" : "translate-y-full"}`}
          >
            {/* Drawer Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">{selectedService.title}</h2>
              <button onClick={onCloseDrawer} className="p-2">
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${selectedService.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4`}
                >
                  <div className="text-white">{getIcon(selectedService.icon, "w-8 h-8")}</div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">{selectedService.price}</div>
                  <div className="text-sm text-gray-600">{selectedService.duration}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tavsif</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedService.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Xizmat tarkibi</h3>
                <div className="space-y-2">
                  {selectedService.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  onClick={onBooking}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl h-12 border-0"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Qabulga yozilish
                </Button>
                <Button
                  onClick={onCall}
                  variant="outline"
                  className="w-full border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl h-12 bg-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Qo'ng'iroq qilish
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
