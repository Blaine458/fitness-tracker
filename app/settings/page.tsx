import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Skeleton } from "@/components/ui/skeleton"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { PreferencesSettings } from "@/components/settings/preferences-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { AccountSettings } from "@/components/settings/account-settings"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-4 space-y-6 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <ProfileSettings />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <PreferencesSettings />
            </Suspense>
          </div>
          <div className="space-y-6">
            <Suspense fallback={<Skeleton className="h-[300px] w-full rounded-lg" />}>
              <NotificationSettings />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-lg" />}>
              <AccountSettings />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
} 