"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Camera } from "lucide-react"

const photos = [
  {
    date: "Jan 1, 2024",
    before: "https://picsum.photos/seed/before1/400/300",
    after: "https://picsum.photos/seed/after1/400/300",
    note: "Started my fitness journey",
  },
  {
    date: "Jan 15, 2024",
    before: "https://picsum.photos/seed/before2/400/300",
    after: "https://picsum.photos/seed/after2/400/300",
    note: "2 weeks of consistent training",
  },
]

export function ProgressPhotos() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Progress Photos</CardTitle>
        <Button variant="outline" size="sm" className="gap-1">
          <Plus className="h-4 w-4" /> Add Photo
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {photos.map((photo, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{photo.date}</span>
              <span className="text-sm text-muted-foreground">{photo.note}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Before</div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img src={photo.before} alt="Before" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">After</div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img src={photo.after} alt="After" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 