"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const currentDate = new Date()
const currentMonth = currentDate.toLocaleString("default", { month: "long" })
const currentYear = currentDate.getFullYear()

// Generate calendar days
const generateCalendarDays = () => {
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay()
  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  return days
}

// Sample workout data
const workoutDays = [3, 7, 12, 15, 20, 25, 28]

export function WorkoutCalendar() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const calendarDays = generateCalendarDays()

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Workout Calendar</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <h3 className="font-semibold">
              {currentMonth} {currentYear}
            </h3>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => (
              <Button
                key={index}
                variant={selectedDate === day ? "default" : "ghost"}
                className={`h-10 w-10 p-0 ${
                  workoutDays.includes(day || 0) ? "bg-primary/10 hover:bg-primary/20" : ""
                }`}
                onClick={() => setSelectedDate(day)}
                disabled={!day}
              >
                {day}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 