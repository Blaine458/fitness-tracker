"use client"

import { motion } from "framer-motion"
import { Clock, Dumbbell, Play, MoreHorizontal, Calendar, Edit, Copy, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

const recentWorkouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    duration: "45 min",
    calories: 320,
    exercises: 8,
    date: "Today",
    type: "Strength",
    completed: true,
    exercises_list: [
      { name: "Bench Press", sets: 4, reps: "8-10", weight: "135 lbs" },
      { name: "Pull-ups", sets: 3, reps: "8-10", weight: "Bodyweight" },
      { name: "Shoulder Press", sets: 3, reps: "10-12", weight: "50 lbs" },
      { name: "Bicep Curls", sets: 3, reps: "12-15", weight: "30 lbs" },
      { name: "Tricep Extensions", sets: 3, reps: "12-15", weight: "25 lbs" },
      { name: "Lateral Raises", sets: 3, reps: "15-20", weight: "15 lbs" },
      { name: "Face Pulls", sets: 3, reps: "15-20", weight: "40 lbs" },
      { name: "Dips", sets: 3, reps: "10-12", weight: "Bodyweight" },
    ],
  },
  {
    id: 2,
    name: "Morning Cardio",
    duration: "30 min",
    calories: 280,
    exercises: 5,
    date: "Yesterday",
    type: "Cardio",
    completed: true,
    exercises_list: [
      { name: "Treadmill Run", sets: 1, reps: "20 min", weight: "N/A" },
      { name: "Jump Rope", sets: 3, reps: "2 min", weight: "N/A" },
      { name: "Burpees", sets: 3, reps: "10", weight: "N/A" },
      { name: "Mountain Climbers", sets: 3, reps: "30 sec", weight: "N/A" },
      { name: "Jumping Jacks", sets: 3, reps: "30", weight: "N/A" },
    ],
  },
  {
    id: 3,
    name: "Leg Day",
    duration: "60 min",
    calories: 450,
    exercises: 10,
    date: "2 days ago",
    type: "Strength",
    completed: true,
    exercises_list: [
      { name: "Squats", sets: 4, reps: "8-10", weight: "185 lbs" },
      { name: "Deadlifts", sets: 4, reps: "6-8", weight: "225 lbs" },
      { name: "Leg Press", sets: 3, reps: "10-12", weight: "300 lbs" },
      { name: "Leg Extensions", sets: 3, reps: "12-15", weight: "90 lbs" },
      { name: "Leg Curls", sets: 3, reps: "12-15", weight: "70 lbs" },
      { name: "Calf Raises", sets: 4, reps: "15-20", weight: "120 lbs" },
      { name: "Hip Thrusts", sets: 3, reps: "12-15", weight: "135 lbs" },
      { name: "Bulgarian Split Squats", sets: 3, reps: "10-12", weight: "40 lbs" },
      { name: "Glute Bridges", sets: 3, reps: "15-20", weight: "50 lbs" },
      { name: "Walking Lunges", sets: 3, reps: "20 steps", weight: "30 lbs" },
    ],
  },
  {
    id: 4,
    name: "HIIT Training",
    duration: "25 min",
    calories: 350,
    exercises: 6,
    date: "3 days ago",
    type: "HIIT",
    completed: false,
    exercises_list: [
      { name: "Burpees", sets: 4, reps: "45 sec", weight: "N/A" },
      { name: "Mountain Climbers", sets: 4, reps: "45 sec", weight: "N/A" },
      { name: "Kettlebell Swings", sets: 4, reps: "45 sec", weight: "35 lbs" },
      { name: "Box Jumps", sets: 4, reps: "45 sec", weight: "24 inch" },
      { name: "Battle Ropes", sets: 4, reps: "45 sec", weight: "N/A" },
      { name: "Plank Jacks", sets: 4, reps: "45 sec", weight: "N/A" },
    ],
  },
]

export function RecentWorkouts() {
  const [selectedWorkout, setSelectedWorkout] = useState<(typeof recentWorkouts)[0] | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleViewWorkout = (workout: (typeof recentWorkouts)[0]) => {
    setSelectedWorkout(workout)
    setDialogOpen(true)
  }

  const getWorkoutTypeColor = (type: string) => {
    switch (type) {
      case "Cardio":
        return "bg-blue-500/10 text-blue-700 border-blue-200"
      case "HIIT":
        return "bg-red-500/10 text-red-700 border-red-200"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Workouts</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentWorkouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-medium">{workout.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{workout.duration}</span>
                    </span>
                    <span>{workout.calories} cal</span>
                    <span>{workout.exercises} exercises</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getWorkoutTypeColor(workout.type)}`}
                >
                  {workout.type}
                </span>

                <Button variant="ghost" size="sm" onClick={() => handleViewWorkout(workout)}>
                  View
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Play className="h-4 w-4 mr-2" />
                      Start Workout
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedWorkout?.name}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center space-x-4 mt-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getWorkoutTypeColor(selectedWorkout?.type || "")}`}
                >
                  {selectedWorkout?.type}
                </span>
                <span className="flex items-center space-x-1 text-sm">
                  <Clock className="h-3 w-3" />
                  <span>{selectedWorkout?.duration}</span>
                </span>
                <span className="text-sm">{selectedWorkout?.calories} cal</span>
              </div>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {selectedWorkout?.exercises_list.map((exercise, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <h4 className="font-medium">{exercise.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exercise.sets} sets × {exercise.reps}
                      </p>
                    </div>
                    <div className="text-sm font-medium">{exercise.weight}</div>
                  </div>
                  {index < (selectedWorkout?.exercises_list.length || 0) - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </ScrollArea>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
            <Button>Start Workout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
