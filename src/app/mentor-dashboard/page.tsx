"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Trainee = {
  id: number
  username: string
  current_material: string | null
  progress_percent: number
}

export default function MentorDashboard() {
  const [trainees, setTrainees] = useState<Trainee[]>([])
  const[mentor,setMentor]=useState<String>("")
  const router = useRouter()

  useEffect(() => {
    const fetchAuthAndTrainees = async () => {
      try {
        // Step 1: Check user auth and role
        const userRes = await fetch("http://localhost:8000/api/user-info", {
          credentials: "include",
        })
        if (!userRes.ok) {
          router.push("/login")
          return
        }

        const userData = await userRes.json()
        setMentor(userData)
        if (userData.role !== "mentor") {
          router.push("/dashboard")
          return
        }

        // Step 2: Fetch trainees if user is mentor
        const res = await fetch("http://localhost:8000/api/mentor/trainees", {
          credentials: "include",
        })
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setTrainees(data)
      } catch (err) {
        console.error("Error:", err)
        router.push("/login")
      }
    }

    fetchAuthAndTrainees()
  }, [router])

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mentor: {mentor.username}</CardTitle>
          <CardDescription>Mentor ID: RXD4X43</CardDescription>
        </CardHeader>
        <CardContent>
          Welcome back! Here’s a quick overview of your trainees and tools.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Trainees</CardTitle>
          <CardDescription>Monitor progress and modules assigned</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {trainees.length === 0 && <p>No trainees found.</p>}
          {trainees.map((trainee) => (
            <div key={trainee.id} className="flex justify-between items-center border p-3 rounded-md">
              <div>
                <p className="font-semibold">{trainee.username}</p>
                <p className="text-sm text-muted-foreground">
                  Module: {trainee.current_material ?? "Not assigned"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={trainee.progress_percent} className="w-32" />
                <span className="text-sm">{trainee.progress_percent}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Link href="/mentor-dashboard/create-mat">
          <Button className="w-full">Create Material</Button>
        </Link>
        <Link href="/mentor-dashboard/create-assignment">
          <Button className="w-full">Create Assignment</Button>
        </Link>
      </div>
    </div>
  )
}
