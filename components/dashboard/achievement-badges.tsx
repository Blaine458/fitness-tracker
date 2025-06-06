"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Target, Flame, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const achievements = [
  {
    id: 1,
    title: "Week Warrior",
    description: "Complete 7 workouts in a week",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    unlocked: true,
    progress: 100,
    tooltip: "Earned on June 1, 2025",
  },
  {
    id: 2,
    title: "Calorie Crusher",
    description: "Burn 3000+ calories in a day",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    unlocked: true,
    progress: 100,
    tooltip: "Earned on May 28, 2025",
  },
  {
    id: 3,
    title: "Step Master",
    description: "Walk 10,000 steps daily for a week",
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    unlocked: false,
    progress: 85,
    tooltip: "6/7 days completed",
  },
  {
    id: 4,
    title: "Early Bird",
    description: "Complete morning workouts for 5 days",
    icon: Star,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    unlocked: false,
    progress: 60,
    tooltip: "3/5 days completed",
  },
]

export function AchievementBadges() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <TooltipProvider>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        achievement.unlocked ? "bg-primary/5 border border-primary/20" : "bg-muted/30 opacity-60"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${achievement.bgColor}`}>
                        <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          {achievement.unlocked && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                              Unlocked
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        {!achievement.unlocked && (
                          <div className="w-full bg-muted rounded-full h-1">
                            <div
                              className="bg-primary h-1 rounded-full transition-all"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{achievement.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </TooltipProvider>
        </CardContent>
      </Card>
    </motion.div>
  )
}
