"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Scale, Ruler, Target, TrendingDown } from "lucide-react"

const summary = {
  currentWeight: 75,
  startWeight: 80,
  goalWeight: 70,
  bodyFat: 18,
  bodyFatGoal: 15,
  measurements: {
    chest: 95,
    waist: 80,
    hips: 90,
  },
}

export function ProgressSummary() {
  const weightProgress = ((summary.startWeight - summary.currentWeight) / (summary.startWeight - summary.goalWeight)) * 100
  const bodyFatProgress = ((summary.bodyFat - summary.bodyFatGoal) / (summary.bodyFat - summary.bodyFatGoal)) * 100

  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Progress Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Weight Progress</span>
            </div>
            <span className="text-sm font-semibold">{summary.currentWeight}kg / {summary.goalWeight}kg</span>
          </div>
          <Progress value={weightProgress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Body Fat</span>
            </div>
            <span className="text-sm font-semibold">{summary.bodyFat}% / {summary.bodyFatGoal}%</span>
          </div>
          <Progress value={bodyFatProgress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Ruler className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Measurements</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="bg-muted/40 rounded p-2 text-center">
              <div className="text-xs text-muted-foreground">Chest</div>
              <div className="font-semibold">{summary.measurements.chest}cm</div>
            </div>
            <div className="bg-muted/40 rounded p-2 text-center">
              <div className="text-xs text-muted-foreground">Waist</div>
              <div className="font-semibold">{summary.measurements.waist}cm</div>
            </div>
            <div className="bg-muted/40 rounded p-2 text-center">
              <div className="text-xs text-muted-foreground">Hips</div>
              <div className="font-semibold">{summary.measurements.hips}cm</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 