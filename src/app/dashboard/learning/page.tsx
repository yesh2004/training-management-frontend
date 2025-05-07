"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Book,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Circle
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

// Types
interface LearningMaterial {
  id: number
  title: string
  material_type: string
  resource_link: string
  duration_hours: number
  is_completed: boolean
}

function Page() {
  const [dashboardData, setDashboardData] = useState<LearningMaterial[]>([])

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/learningmaterial", {
          method: "GET",
          credentials: "include",
        })
        const data: LearningMaterial[] = await response.json()
        await console.log(data)
        setDashboardData(data)
       
        
      } catch (error) {
        console.error("Failed to fetch learning materials:", error)
      }
    }
    fetchDashboardData()
  }, [])

  const toggleComplete = async (materialId: number, currentStatus: boolean) => {
    try {
      const response = await fetch("http://localhost:8000/api/trainee/mark-material", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ material_id: materialId, completed: !currentStatus }),
      })

      

      if (response.ok) {
        setDashboardData(prev =>
          prev.map(mat =>
            mat.id === materialId ? { ...mat, is_completed: !currentStatus } : mat
          )
        )
      } else {
        console.error("Failed to update material status")
      }
    } catch (err) {
      console.error("Error updating material status:", err)
    }
  }

  if (!dashboardData.length) return <div>Loading...</div>

  return (
    <div className="p-4">
      <section className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Learning Materials</h2>
          <Button variant="ghost" className="text-sm text-blue-600 hover:bg-blue-50">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <Card className="w-full">
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {dashboardData.map((material) => (
                <div className="flex items-center gap-3 p-4" key={material.id}>
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleComplete(material.id, material.is_completed)}
                  >
                    {material.is_completed ? (
                      <CheckCircle className="text-green-600 h-5 w-5" />
                    ) : (
                      <Circle className="text-gray-400 h-5 w-5" />
                    )}
                  </div>
                  <div className="bg-green-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{material.title}</h3>
                    <p className="text-xs text-gray-500">
                      {material.material_type} • {material.duration_hours} hours
                    </p>
                  </div>
                  <Link href={material.resource_link} className="text-sm ml-auto cursor-pointer">
                    <ExternalLink />
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Page
