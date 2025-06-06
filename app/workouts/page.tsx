import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Skeleton } from "@/components/ui/skeleton"
import { WorkoutList } from "@/components/workouts/workout-list"
import { WorkoutStats } from "@/components/workouts/workout-stats"
import { WorkoutCalendar } from "@/components/workouts/workout-calendar"
import { WorkoutProgress } from "@/components/workouts/workout-progress"

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 space-y-6 relative z-0">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <WorkoutList />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <WorkoutProgress />
            </Suspense>
          </div>

          <div className="space-y-6">
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <WorkoutStats />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <WorkoutCalendar />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 