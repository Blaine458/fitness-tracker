"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Calendar, Award } from "lucide-react"

const goals = [
  {
    title: "Weight Goal",
    target: "70kg",
    current: "75kg",
    progress: 50,
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Body Fat Goal",
    target: "15%",
    current: "18%",
    progress: 60,
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Workout Streak",
    target: "30 days",
    current: "15 days",
    progress: 50,
    icon: Calendar,
    color: "text-green-500",
  },
]

const milestones = [
  {
    title: "First 5kg Lost",
    date: "Jan 15, 2024",
    icon: Award,
    color: "text-purple-500",
  },
  {
    title: "10 Workouts Completed",
    date: "Jan 20, 2024",
    icon: Trophy,
    color: "text-orange-500",
  },
  {
    title: "Body Fat Below 20%",
    date: "Jan 25, 2024",
    icon: Target,
    color: "text-blue-500",
  },
]

export function GoalTracking() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Goals & Milestones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Current Goals</h3>
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <goal.icon className={`h-5 w-5 ${goal.color}`} />
                  <span className="text-sm font-medium">{goal.title}</span>
                </div>
                <span className="text-sm font-semibold">{goal.current} / {goal.target}</span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Recent Milestones</h3>
          <div className="space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-3 bg-muted/40 rounded p-3">
                <milestone.icon className={`h-5 w-5 ${milestone.color}`} />
                <div>
                  <div className="text-sm font-medium">{milestone.title}</div>
                  <div className="text-xs text-muted-foreground">{milestone.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 