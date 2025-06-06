import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Skeleton } from "@/components/ui/skeleton"
import { NutritionSummary } from "@/components/nutrition/nutrition-summary"
import { MealLog } from "@/components/nutrition/meal-log"
import { NutritionChart } from "@/components/nutrition/nutrition-chart"
import { RecentFoods } from "@/components/nutrition/recent-foods"
import { NutritionAchievements } from "@/components/nutrition/nutrition-achievements"

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 space-y-6 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <NutritionChart />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <MealLog />
            </Suspense>
          </div>
          <div className="space-y-6">
            <Suspense fallback={<Skeleton className="h-[180px] w-full rounded-lg" />}>
              <NutritionSummary />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-lg" />}>
              <RecentFoods />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[200px] w-full rounded-lg" />}>
              <NutritionAchievements />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 