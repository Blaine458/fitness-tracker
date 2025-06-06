"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Drumstick, Croissant, Egg } from "lucide-react"

const meals = [
  {
    name: "Breakfast",
    foods: [
      { name: "Oatmeal", protein: 6, carbs: 27, fat: 3, calories: 150 },
      { name: "Eggs", protein: 12, carbs: 1, fat: 10, calories: 140 },
    ],
  },
  {
    name: "Lunch",
    foods: [
      { name: "Grilled Chicken", protein: 30, carbs: 0, fat: 4, calories: 160 },
      { name: "Rice", protein: 4, carbs: 45, fat: 1, calories: 210 },
    ],
  },
  {
    name: "Dinner",
    foods: [
      { name: "Salmon", protein: 25, carbs: 0, fat: 13, calories: 220 },
      { name: "Quinoa", protein: 8, carbs: 39, fat: 3, calories: 180 },
    ],
  },
  {
    name: "Snacks",
    foods: [
      { name: "Greek Yogurt", protein: 10, carbs: 8, fat: 0, calories: 80 },
      { name: "Almonds", protein: 6, carbs: 6, fat: 14, calories: 160 },
    ],
  },
]

export function MealLog() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Meal Log</CardTitle>
        <Button variant="outline" size="sm" className="gap-1">
          <Plus className="h-4 w-4" /> Add Meal
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {meals.map((meal) => (
          <div key={meal.name}>
            <div className="font-semibold text-lg mb-2">{meal.name}</div>
            <div className="space-y-2">
              {meal.foods.map((food, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm bg-muted/40 rounded px-3 py-2">
                  <span>{food.name}</span>
                  <span className="flex items-center gap-2">
                    <Drumstick className="h-4 w-4 text-pink-500" /> {food.protein}g
                    <Croissant className="h-4 w-4 text-yellow-500" /> {food.carbs}g
                    <Egg className="h-4 w-4 text-blue-500" /> {food.fat}g
                    <span className="font-semibold text-orange-600">{food.calories} kcal</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 