"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Leaf, Star, Heart } from "lucide-react"

const achievements = [
  { icon: Trophy, label: "Hit Protein Goal" },
  { icon: Leaf, label: "No Sugar Day" },
  { icon: Star, label: "Perfect Macros" },
  { icon: Heart, label: "Hydration Hero" },
]

export function NutritionAchievements() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {achievements.map((ach, idx) => (
          <Badge key={idx} variant="secondary" className="flex items-center gap-1 px-3 py-1">
            <ach.icon className="h-4 w-4" />
            {ach.label}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
} 