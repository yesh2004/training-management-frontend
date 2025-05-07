"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight, FileText, Book } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchAuthAndDashboardData = async () => {
      try {
        const userRes = await fetch("http://localhost:8000/api/user-info", {
          credentials: "include",
        })

        if (!userRes.ok) {
          router.push("/login")
          return
        }

        const userData = await userRes.json()
        if (userData.role === "mentor") {
          router.push("/mentor-dashboard")
          return
        }

        const dashRes = await fetch("http://localhost:8000/api/trainee/dashboard", {
          method: "GET",
          credentials: "include",
        })

        if (!dashRes.ok) {
          console.error("Dashboard fetch failed")
          return
        }

        const dashData = await dashRes.json()
        setDashboardData(dashData)
      } catch (error) {
        console.error("Error:", error)
        router.push("/login")
      }
    }

    fetchAuthAndDashboardData()
  }, [router])

  if (!dashboardData) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="ml-9">
      <h1 className="text-xl font-sans font-extrabold">Your Progress</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{dashboardData.current_module}</CardTitle>
            <CardDescription>Current Module</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={dashboardData.overall_progress} />
            <CardDescription>{dashboardData.overall_progress}% Completed</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {dashboardData.assignments_completed}/{dashboardData.total_assignments}
            </CardTitle>
            <CardDescription>Assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress
              value={
                (dashboardData.assignments_completed / dashboardData.total_assignments) * 100
              }
            />
            <CardDescription>
              {(
                (dashboardData.assignments_completed / dashboardData.total_assignments) *
                100
              ).toFixed(2)}% Completed
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {dashboardData.overall_progress}%
            </CardTitle>
            <CardDescription>Overall Progress</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={dashboardData.overall_progress} />
            <CardDescription>{dashboardData.overall_progress}% Completed</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Assignments */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h2>
          <Link href="/dashboard/assignments">
            <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-0">
              {dashboardData.upcoming_assignments.map((assignment, index) => (
                <div className="divide-y divide-gray-100" key={index}>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500">{assignment.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant="outline"
                        className="bg-amber-50 text-amber-700 border-amber-200"
                      >
                        Due on {new Date(assignment.due_date).toLocaleDateString()}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Materials & Mentor Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Learning Materials */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Learning Materials</h2>
            <Link href="/dashboard/learning">
              <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {dashboardData.learning_materials.map((material, idx) => (
                  <a
                    href={material.resource_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-green-100 p-2 rounded-md">
                      <Book className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{material.title}</h3>
                      <p className="text-xs text-gray-500">
                        {material.material_type} • {material.duration_hours} hours
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recent Mentor Feedback */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Mentor Feedback</h2>
          </div>
          <Card>
            <CardContent className="p-4">
              {dashboardData.recent_feedback.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {dashboardData.recent_feedback.map((feedback, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage
                          src={feedback.mentor_avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {feedback.mentor_name?.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{feedback.trainer_name}</h3>
                          <span className="text-xs text-gray-500">
                            {new Date(feedback.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm mt-1">{feedback.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No feedback yet.</p>
              )}
            </CardContent>
            <CardFooter className="border-t px-4 py-3">
              <Button variant="outline" size="sm" className="w-full">
                Schedule Mentor Meeting
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default DashboardPage
