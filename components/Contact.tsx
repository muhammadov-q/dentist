"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"
import type { CalendarDay } from "../types"
import { generateCalendarDays } from "../utils/calendar"
import { timeSlots } from "../data/mockData"

interface ContactProps {
  selectedDate: CalendarDay | null
  selectedTime: string | null
  onDateSelect: (date: CalendarDay) => void
  onTimeSelect: (time: string) => void
  onBooking: () => void
  onCall: () => void
  onEmail: () => void
  onWhatsApp: () => void
}

export default function Contact({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
  onBooking,
  onCall,
  onEmail,
  onWhatsApp,
}: ContactProps) {
  return (
    <div className="px-4 space-y-4 pb-6 pt-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900">Bog'lanish</h2>
        <p className="text-sm text-gray-600 mt-1">Qabulga yozilish uchun</p>
      </div>

      {/* Calendar Section */}
      <Card className="border border-blue-200 rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Calendar className="w-4 h-4" />
            Qabul kalendari - Dekabr 2024
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {generateCalendarDays().map((day, index) => (
              <button
                key={index}
                onClick={() => day && day.isAvailable && onDateSelect(day)}
                disabled={!day || day.isPast || day.isWeekend || !day.isAvailable}
                className={`
                  aspect-square text-xs rounded-lg transition-all
                  ${!day ? "invisible" : ""}
                  ${
                    day?.isPast || day?.isWeekend || !day?.isAvailable
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-700 hover:bg-blue-50 cursor-pointer"
                  }
                  ${day?.isToday ? "bg-blue-100 font-semibold" : ""}
                  ${selectedDate?.day === day?.day ? "bg-blue-500 text-white" : ""}
                  ${day?.isAvailable ? "border border-green-200" : ""}
                `}
              >
                {day?.day}
              </button>
            ))}
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 text-sm">Mavjud vaqtlar:</h4>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => onTimeSelect(time)}
                    className={`
                      py-2 px-3 text-xs rounded-lg border transition-all
                      ${
                        selectedTime === time
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selected Date/Time Display */}
          {selectedDate && selectedTime && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                <strong>Tanlangan vaqt:</strong> {selectedDate.day}-dekabr, {selectedTime}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border border-gray-200 rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 border-b border-teal-200 rounded-t-2xl">
          <CardTitle className="flex items-center gap-2 text-base">
            <MapPin className="w-4 h-4" />
            Manzil
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-700 text-sm">
            Stomatologiya ko'chasi, 123
            <br />
            Toshkent, O'zbekiston 100000
          </p>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 border-b border-indigo-200 rounded-t-2xl">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="w-4 h-4" />
            Ish vaqti
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-2">
          <div className="flex justify-between text-sm p-2 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-600">Dushanba - Juma</span>
            <span className="font-medium">9:00 - 18:00</span>
          </div>
          <div className="flex justify-between text-sm p-2 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-600">Shanba</span>
            <span className="font-medium">9:00 - 14:00</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button
          onClick={onBooking}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl h-12 border-0 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Qabulga yozilish
        </Button>
        <Button
          onClick={onCall}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl h-12 border-0 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mr-2" />
          +998 90 123 45 67
        </Button>
        <Button
          onClick={onEmail}
          variant="outline"
          className="w-full border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl h-12 bg-white active:scale-95 transition-transform"
        >
          <Mail className="w-4 h-4 mr-2" />
          dr.kamronbek@dental.uz
        </Button>
        <Button
          onClick={onWhatsApp}
          variant="outline"
          className="w-full border border-green-200 text-green-600 hover:bg-green-50 rounded-xl h-12 bg-white active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
