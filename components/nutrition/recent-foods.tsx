"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, Pizza, Salad, Cookie } from "lucide-react"

const foods = [
  { name: "Apple", icon: Apple, calories: 95 },
  { name: "Pizza Slice", icon: Pizza, calories: 285 },
  { name: "Caesar Salad", icon: Salad, calories: 180 },
  { name: "Cookie", icon: Cookie, calories: 160 },
]

export function RecentFoods() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Recent Foods</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {foods.map((food, idx) => (
          <div key={idx} className="flex items-center justify-between bg-muted/40 rounded px-3 py-2">
            <div className="flex items-center gap-2">
              <food.icon className="h-5 w-5 text-primary" />
              <span>{food.name}</span>
            </div>
            <span className="text-sm font-semibold text-orange-600">{food.calories} kcal</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 