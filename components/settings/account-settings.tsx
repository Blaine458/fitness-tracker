"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Lock, Shield, Trash2, LogOut } from "lucide-react"

export function AccountSettings() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="flex gap-2">
              <Input id="current-password" type="password" />
              <Button variant="outline">
                <Lock className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="flex gap-2">
              <Input id="new-password" type="password" />
              <Button variant="outline">
                <Shield className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <div className="flex gap-2">
              <Input id="confirm-password" type="password" />
              <Button variant="outline">
                <Shield className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <span className="font-medium">Danger Zone</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Delete Account</div>
              <div className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data
              </div>
            </div>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              Delete Account
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Sign Out</div>
              <div className="text-sm text-muted-foreground">
                Sign out of your account on all devices
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 