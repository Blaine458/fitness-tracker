"use client"

import { motion } from "framer-motion"
import { Play, Plus, Camera, Timer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const quickActions = [
  {
    title: "Start Workout",
    description: "Begin your planned workout",
    icon: Play,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    dialog: "workout",
  },
  {
    title: "Log Meal",
    description: "Track your nutrition",
    icon: Plus,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    dialog: "meal",
  },
  {
    title: "Progress Photo",
    description: "Capture your journey",
    icon: Camera,
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    dialog: "photo",
  },
  {
    title: "Quick Timer",
    description: "Start a rest timer",
    icon: Timer,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    dialog: "timer",
  },
]

export function QuickActions() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null)
  const [timerSeconds, setTimerSeconds] = useState(60)

  const handleActionClick = (dialogType: string) => {
    setActiveDialog(dialogType)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Button
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center space-y-2 w-full ${action.color} ${action.hoverColor} text-white border-0 transition-all duration-200 hover:scale-105`}
                onClick={() => handleActionClick(action.dialog)}
              >
                <action.icon className="h-6 w-6" />
                <div className="text-center">
                  <p className="font-medium text-xs">{action.title}</p>
                  <p className="text-xs opacity-80">{action.description}</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Workout Dialog */}
      <Dialog open={activeDialog === "workout"} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start Workout</DialogTitle>
            <DialogDescription>Choose a workout to begin or create a new one.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button className="w-full justify-start" variant="outline">
              Upper Body Strength
            </Button>
            <Button className="w-full justify-start" variant="outline">
              Lower Body Strength
            </Button>
            <Button className="w-full justify-start" variant="outline">
              HIIT Cardio
            </Button>
            <Button className="w-full justify-start" variant="outline">
              Core Workout
            </Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveDialog(null)}>
              Cancel
            </Button>
            <Button>Create New Workout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Meal Dialog */}
      <Dialog open={activeDialog === "meal"} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log Meal</DialogTitle>
            <DialogDescription>Record what you've eaten to track your nutrition.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="meal-name" className="text-right">
                Meal
              </Label>
              <Input id="meal-name" placeholder="What did you eat?" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="calories" className="text-right">
                Calories
              </Label>
              <Input id="calories" type="number" placeholder="0" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="protein" className="text-right">
                Protein (g)
              </Label>
              <Input id="protein" type="number" placeholder="0" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="carbs" className="text-right">
                Carbs (g)
              </Label>
              <Input id="carbs" type="number" placeholder="0" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fat" className="text-right">
                Fat (g)
              </Label>
              <Input id="fat" type="number" placeholder="0" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveDialog(null)}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Photo Dialog */}
      <Dialog open={activeDialog === "photo"} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Progress Photo</DialogTitle>
            <DialogDescription>Take a photo to track your physical progress over time.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <Camera className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Front</Button>
              <Button variant="outline">Side</Button>
              <Button variant="outline">Back</Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveDialog(null)}>
              Cancel
            </Button>
            <Button>Take Photo</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Timer Dialog */}
      <Dialog open={activeDialog === "timer"} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rest Timer</DialogTitle>
            <DialogDescription>Set a timer for your rest between sets.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8 space-y-6">
            <div className="text-6xl font-bold">
              {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, "0")}
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => setTimerSeconds(30)}>
                30s
              </Button>
              <Button variant="outline" onClick={() => setTimerSeconds(60)}>
                1m
              </Button>
              <Button variant="outline" onClick={() => setTimerSeconds(90)}>
                1m 30s
              </Button>
              <Button variant="outline" onClick={() => setTimerSeconds(120)}>
                2m
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveDialog(null)}>
              Cancel
            </Button>
            <Button>Start Timer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
