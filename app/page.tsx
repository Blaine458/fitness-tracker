import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsOverview } from "@/components/dashboard/stats-overview"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { RecentWorkouts } from "@/components/dashboard/recent-workouts"
import { NutritionSummary } from "@/components/dashboard/nutrition-summary"
import { AchievementBadges } from "@/components/dashboard/achievement-badges"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { Skeleton } from "@/components/ui/skeleton"
import { SocialFeed } from "@/components/dashboard/social-feed"
import { UpcomingWorkouts } from "@/components/dashboard/upcoming-workouts"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 space-y-6 relative z-0">

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-6 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <Skeleton className="h-8 w-8 rounded-lg" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-16 mb-2" />
                  <Skeleton className="h-2 w-full" />
                </div>
              ))}
            </div>
          }
        >
          <StatsOverview />
        </Suspense>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <ActivityChart />
            </Suspense>

            <Suspense
              fallback={
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-48" />
                      </div>
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                  ))}
                </div>
              }
            >
              <RecentWorkouts />
            </Suspense>

            <Suspense
              fallback={
                <div className="space-y-6">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex space-x-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-32 w-full rounded-lg" />
                      <div className="flex space-x-4">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-16" />
                      </div>
                    </div>
                  ))}
                </div>
              }
            >
              <SocialFeed />
            </Suspense>
          </div>

          <div className="space-y-6">
            <NutritionSummary />
            <AchievementBadges />
            <UpcomingWorkouts />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  )
}
