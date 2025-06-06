"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Apple, Flame, Droplet, Beef } from "lucide-react"
import { LogMealDialog } from "@/components/nutrition/log-meal-dialog"

const nutritionData = {
  calories: {
    current: 1200,
    goal: 2000,
    icon: Flame,
    color: "text-orange-500",
  },
  protein: {
    current: 60,
    goal: 150,
    icon: Beef,
    color: "text-red-500",
  },
  carbs: {
    current: 150,
    goal: 250,
    icon: Apple,
    color: "text-green-500",
  },
  water: {
    current: 1.5,
    goal: 2.5,
    icon: Droplet,
    color: "text-blue-500",
  },
}

export function NutritionSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's Nutrition</CardTitle>
          <LogMealDialog />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(nutritionData).map(([key, data]) => {
              const Icon = data.icon
              const percentage = (data.current / data.goal) * 100
              return (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-4 w-4 ${data.color}`} />
                      <span className="text-sm font-medium capitalize">{key}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {data.current}/{data.goal} {key === "water" ? "L" : "g"}
                    </span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
