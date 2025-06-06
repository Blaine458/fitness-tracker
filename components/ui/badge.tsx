import { cn } from "@/lib/utils"
import React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default"
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground border border-border",
        className
      )}
      {...props}
    />
  )
} 