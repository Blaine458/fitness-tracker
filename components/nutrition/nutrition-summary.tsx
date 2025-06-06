"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame, Drumstick, Egg, Croissant } from "lucide-react"

const summary = {
  calories: 1850,
  goal: 2200,
  protein: 120,
  carbs: 210,
  fat: 60,
  proteinGoal: 150,
  carbsGoal: 250,
  fatGoal: 70,
}

export function NutritionSummary() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Nutrition Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-4xl font-bold flex items-center gap-2">
              <Flame className="h-6 w-6 text-orange-500" />
              {summary.calories} <span className="text-base font-normal text-muted-foreground">/ {summary.goal} kcal</span>
            </div>
            <Progress value={(summary.calories / summary.goal) * 100} className="h-2 mt-2" />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <Drumstick className="h-5 w-5 text-pink-500" />
              <span className="font-semibold">{summary.protein}g</span>
              <span className="text-xs text-muted-foreground">Protein</span>
              <span className="text-xs">/ {summary.proteinGoal}g</span>
            </div>
            <div className="flex flex-col items-center">
              <Croissant className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">{summary.carbs}g</span>
              <span className="text-xs text-muted-foreground">Carbs</span>
              <span className="text-xs">/ {summary.carbsGoal}g</span>
            </div>
            <div className="flex flex-col items-center">
              <Egg className="h-5 w-5 text-blue-500" />
              <span className="font-semibold">{summary.fat}g</span>
              <span className="text-xs text-muted-foreground">Fat</span>
              <span className="text-xs">/ {summary.fatGoal}g</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 