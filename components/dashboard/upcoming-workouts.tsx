"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const upcomingWorkouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    time: "Tomorrow, 7:00 AM",
    duration: "45 min",
    location: "Home Gym",
    type: "Strength",
    participants: 1,
    completed: false,
  },
  {
    id: 2,
    name: "Group Yoga Class",
    time: "Wednesday, 6:30 PM",
    duration: "60 min",
    location: "Fitness Studio",
    type: "Flexibility",
    participants: 12,
    completed: false,
  },
  {
    id: 3,
    name: "HIIT Cardio",
    time: "Friday, 8:00 AM",
    duration: "30 min",
    location: "Home",
    type: "HIIT",
    participants: 1,
    completed: false,
  },
]

export function UpcomingWorkouts() {
  const [workouts, setWorkouts] = useState(upcomingWorkouts)

  const toggleWorkout = (id: number) => {
    setWorkouts(
      workouts.map((workout) => (workout.id === id ? { ...workout, completed: !workout.completed } : workout)),
    )
  }

  const getWorkoutTypeColor = (type: string) => {
    switch (type) {
      case "Flexibility":
        return "bg-purple-500/10 text-purple-700 border-purple-200"
      case "HIIT":
        return "bg-red-500/10 text-red-700 border-red-200"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Upcoming</span>
          </CardTitle>
          <Button variant="outline" size="sm">
            Schedule
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {workouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                workout.completed ? "bg-green-500/10 border border-green-500/20" : "bg-muted/30"
              }`}
            >
              <Checkbox checked={workout.completed} onCheckedChange={() => toggleWorkout(workout.id)} />

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4
                    className={`font-medium text-sm ${workout.completed ? "line-through text-muted-foreground" : ""}`}
                  >
                    {workout.name}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getWorkoutTypeColor(workout.type)}`}
                  >
                    {workout.type}
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{workout.time}</span>
                  </span>
                  <span>{workout.duration}</span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{workout.location}</span>
                  </span>
                  {workout.participants > 1 && (
                    <span className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{workout.participants} people</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
