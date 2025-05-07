"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Select, SelectItem } from "@/components/ui/select"

type Trainee = { id: number; username: string }

export default function CreateMaterialPage() {
  const [form, setForm] = useState({
    title: "",
    material_type: "",
    resource_link: "",
    duration_hours: "",
    trainee_id: "",
  })

  const [trainees, setTrainees] = useState<Trainee[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/mentor/trainees", {
          credentials: "include",
        });
        const data = await res.json();
  
        // ✅ Ensure it's an array before setting
        if (Array.isArray(data)) {
          setTrainees(data);
        } else {
          console.error("Invalid data format for trainees", data);
          setTrainees([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Failed to fetch trainees:", error);
        setTrainees([]); // Fallback on error
      }
    };
    fetchTrainees();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/mentor/create-material", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          duration_hours: parseFloat(form.duration_hours),
          trainee_id: form.trainee_id ? parseInt(form.trainee_id) : null,
        }),
      })

      if (response.ok) {
        toast.success("Material created successfully")
        setForm({ title: "", material_type: "", resource_link: "", duration_hours: "", trainee_id: "" })
      } else {
        toast.error("Failed to create material")
      }
    } catch {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Create Learning Material</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input name="title" value={form.title} onChange={handleChange} />
          </div>
          <div>
            <Label>Material Type</Label>
            <Input name="material_type" value={form.material_type} onChange={handleChange} />
          </div>
          <div>
            <Label>Resource Link</Label>
            <Input name="resource_link" value={form.resource_link} onChange={handleChange} />
          </div>
          <div>
            <Label>Duration (hours)</Label>
            <Input type="number" name="duration_hours" value={form.duration_hours} onChange={handleChange} />
          </div>
          <div>
            <Label>Assign to Trainee (optional)</Label>
            <select
              name="trainee_id"
              value={form.trainee_id}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">-- Select Trainee --</option>
              {trainees.map(t => (
                <option key={t.id} value={t.id}>
                  {t.username}
                </option>
              ))}
            </select>
          </div>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Create Material"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
