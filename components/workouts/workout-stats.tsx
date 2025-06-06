"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Target, Trophy, Calendar } from "lucide-react"

const stats = [
  {
    title: "Weekly Goal",
    value: "4/5",
    icon: Target,
    color: "text-green-500",
    progress: 80,
  },
  {
    title: "Calories Burned",
    value: "2,450",
    icon: Flame,
    color: "text-orange-500",
    progress: 65,
  },
  {
    title: "Achievements",
    value: "3",
    icon: Trophy,
    color: "text-yellow-500",
    progress: 30,
  },
  {
    title: "Workout Streak",
    value: "7 days",
    icon: Calendar,
    color: "text-blue-500",
    progress: 100,
  },
]

export function WorkoutStats() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader>
          <CardTitle>Workout Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-sm font-medium">{stat.title}</span>
                </div>
                <span className="text-sm font-semibold">{stat.value}</span>
              </div>
              <Progress value={stat.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
} 