"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Calendar, TrendingUp, Flame } from "lucide-react"

const workouts = [
  {
    date: "Feb 5, 2024",
    type: "Full Body Strength",
    duration: "60 min",
    calories: 450,
    impact: "Weight: -0.5kg",
  },
  {
    date: "Feb 3, 2024",
    type: "HIIT Cardio",
    duration: "45 min",
    calories: 600,
    impact: "Body Fat: -0.2%",
  },
  {
    date: "Feb 1, 2024",
    type: "Upper Body",
    duration: "50 min",
    calories: 380,
    impact: "Chest: +1cm",
  },
]

export function WorkoutHistory() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Workout History</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {workouts.map((workout, index) => (
          <div key={index} className="flex items-center justify-between bg-muted/40 rounded p-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded">
                <Dumbbell className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{workout.type}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {workout.date}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm">
                  <Flame className="h-4 w-4 text-orange-500" />
                  {workout.calories} cal
                </div>
                <div className="text-sm text-muted-foreground">{workout.duration}</div>
              </div>
              <div className="flex items-center gap-1 text-sm text-green-500">
                <TrendingUp className="h-4 w-4" />
                {workout.impact}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 