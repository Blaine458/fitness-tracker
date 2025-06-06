"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Jan 1", weight: 80, bodyFat: 20, chest: 98, waist: 85, hips: 95 },
  { date: "Jan 8", weight: 79, bodyFat: 19.5, chest: 97, waist: 84, hips: 94 },
  { date: "Jan 15", weight: 78, bodyFat: 19, chest: 96, waist: 83, hips: 93 },
  { date: "Jan 22", weight: 77, bodyFat: 18.5, chest: 95, waist: 82, hips: 92 },
  { date: "Jan 29", weight: 76, bodyFat: 18, chest: 95, waist: 81, hips: 91 },
  { date: "Feb 5", weight: 75, bodyFat: 18, chest: 95, waist: 80, hips: 90 },
]

export function ProgressChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Progress Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weight" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weight">Weight & Body Fat</TabsTrigger>
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
          </TabsList>
          <TabsContent value="weight" className="mt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="weight"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Weight (kg)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="bodyFat"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Body Fat (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="measurements" className="mt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="chest" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} name="Chest (cm)" />
                  <Line type="monotone" dataKey="waist" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} name="Waist (cm)" />
                  <Line type="monotone" dataKey="hips" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} name="Hips (cm)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 