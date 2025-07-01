import type { CalendarDay } from "../types"

export const generateCalendarDays = (): (CalendarDay | null)[] => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days: (CalendarDay | null)[] = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)
    const isToday = day === today.getDate()
    const isPast = date < today
    const isWeekend = date.getDay() === 0 // Sunday
    const isAvailable = !isPast && !isWeekend && day % 3 !== 0 // Mock availability

    days.push({
      day,
      date,
      isToday,
      isPast,
      isWeekend,
      isAvailable,
    })
  }

  return days
}
