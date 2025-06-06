"use client"

import { motion } from "framer-motion"
import { Clock, Dumbbell, Calendar, MoreHorizontal, Trophy, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const workouts = [
  {
    id: 1,
    title: "Full Body Strength",
    type: "Strength",
    duration: "60 min",
    difficulty: "Intermediate",
    exercises: 8,
    calories: 450,
    date: "Today, 10:00 AM",
    image: "https://picsum.photos/seed/workout1/500/300",
    completed: true,
  },
  {
    id: 2,
    title: "HIIT Cardio Blast",
    type: "Cardio",
    duration: "45 min",
    difficulty: "Advanced",
    exercises: 12,
    calories: 600,
    date: "Tomorrow, 9:00 AM",
    image: "https://picsum.photos/seed/workout2/500/300",
    completed: false,
  },
  {
    id: 3,
    title: "Yoga Flow",
    type: "Flexibility",
    duration: "30 min",
    difficulty: "Beginner",
    exercises: 6,
    calories: 200,
    date: "Tomorrow, 5:00 PM",
    image: "https://picsum.photos/seed/workout3/500/300",
    completed: false,
  },
]

export function WorkoutList() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Upcoming Workouts</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {workouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={workout.image} alt={workout.title} />
                    <AvatarFallback>
                      <Dumbbell className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{workout.title}</h4>
                      <Badge variant={workout.completed ? "default" : "secondary"}>
                        {workout.completed ? "Completed" : "Upcoming"}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{workout.duration}</span>
                      <span>•</span>
                      <Target className="h-4 w-4" />
                      <span>{workout.difficulty}</span>
                      <span>•</span>
                      <Calendar className="h-4 w-4" />
                      <span>{workout.date}</span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Workout</DropdownMenuItem>
                    <DropdownMenuItem>Share Workout</DropdownMenuItem>
                    <DropdownMenuItem>Delete Workout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Dumbbell className="h-4 w-4 text-primary" />
                  <span>{workout.exercises} exercises</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>{workout.calories} calories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-green-500" />
                  <span>{workout.type}</span>
                </div>
              </div>

              {index < workouts.length - 1 && <Separator />}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
} 