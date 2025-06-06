"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, Calendar, MessageSquare, Trophy, TrendingUp } from "lucide-react"

export function NotificationSettings() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <Label htmlFor="all-notifications">All Notifications</Label>
            </div>
            <Switch id="all-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <Label htmlFor="workout-reminders">Workout Reminders</Label>
            </div>
            <Switch id="workout-reminders" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <Label htmlFor="social-updates">Social Updates</Label>
            </div>
            <Switch id="social-updates" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <Label htmlFor="achievements">Achievement Alerts</Label>
            </div>
            <Switch id="achievements" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <Label htmlFor="progress-updates">Progress Updates</Label>
            </div>
            <Switch id="progress-updates" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 