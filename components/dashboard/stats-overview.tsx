"use client"

import { motion } from "framer-motion"
import { Activity, Flame, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const stats = [
  {
    title: "Calories Burned",
    value: "2,847",
    target: "3,000",
    progress: 95,
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    tooltip: "Total calories burned today from all activities",
    details: "You're burning more calories than 85% of users with similar profiles",
  },
  {
    title: "Active Minutes",
    value: "127",
    target: "150",
    progress: 85,
    icon: Activity,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    tooltip: "Minutes spent in moderate to intense activity",
    details: "23 minutes left to reach your daily active minutes goal",
  },
  {
    title: "Steps Today",
    value: "8,432",
    target: "10,000",
    progress: 84,
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    tooltip: "Total steps walked today",
    details: "1,568 steps left to reach your daily goal",
  },
  {
    title: "Weekly Progress",
    value: "6/7",
    target: "7",
    progress: 86,
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    tooltip: "Days with completed workouts this week",
    details: "You've worked out 6 out of 7 days this week",
  },
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="relative overflow-hidden bg-card/50 backdrop-blur-lg border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                          </div>
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <span className="text-xs font-bold text-primary">{stat.progress}%</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                          <div className="flex items-baseline space-x-2">
                            <span className="text-2xl font-bold">{stat.value}</span>
                            <span className="text-sm text-muted-foreground">/ {stat.target}</span>
                          </div>
                          <Progress value={stat.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{stat.title} Details</h4>
                      <p className="text-sm">{stat.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TooltipTrigger>
              <TooltipContent>
                <p>{stat.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      ))}
    </div>
  )
}
