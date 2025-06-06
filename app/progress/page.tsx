import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Skeleton } from "@/components/ui/skeleton"
import { ProgressSummary } from "@/components/progress/progress-summary"
import { ProgressChart } from "@/components/progress/progress-chart"
import { GoalTracking } from "@/components/progress/goal-tracking"
import { ProgressPhotos } from "@/components/progress/progress-photos"
import { WorkoutHistory } from "@/components/progress/workout-history"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 space-y-6 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <ProgressChart />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <ProgressPhotos />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <WorkoutHistory />
            </Suspense>
          </div>
          <div className="space-y-6">
            <Suspense fallback={<Skeleton className="h-[180px] w-full rounded-lg" />}>
              <ProgressSummary />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <GoalTracking />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 