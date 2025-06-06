"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", calories: 1800, protein: 110, carbs: 200, fat: 60 },
  { name: "Tue", calories: 2000, protein: 130, carbs: 220, fat: 70 },
  { name: "Wed", calories: 1750, protein: 120, carbs: 210, fat: 65 },
  { name: "Thu", calories: 2100, protein: 140, carbs: 250, fat: 80 },
  { name: "Fri", calories: 1900, protein: 125, carbs: 230, fat: 68 },
  { name: "Sat", calories: 2200, protein: 150, carbs: 260, fat: 75 },
  { name: "Sun", calories: 1600, protein: 100, carbs: 180, fat: 55 },
]

export function NutritionChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-lg border-border/50">
      <CardHeader>
        <CardTitle>Nutrition Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calories" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calories">Calories</TabsTrigger>
            <TabsTrigger value="macros">Macros</TabsTrigger>
          </TabsList>
          <TabsContent value="calories" className="mt-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="calories" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="macros" className="mt-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="protein" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="carbs" stroke="#eab308" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="fat" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 