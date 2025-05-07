"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Trainee {
  id: number;
  username: string;
}

export default function CreateAssignmentPage() {
  const [trainees, setTrainees] = useState<Trainee[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    due_date: "",
    submission_link: "",  // ✅ Added
    trainee_id: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/mentor/trainees", {
          credentials: "include",
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setTrainees(data);
        } else {
          console.error("Invalid data format for trainees", data);
          setTrainees([]);
        }
      } catch (error) {
        console.error("Failed to fetch trainees:", error);
        setTrainees([]);
      }
    };
    fetchTrainees();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/mentor/create-assignment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || "Something went wrong");
      } else {
        setMessage(data.message);
        setForm({
          title: "",
          description: "",
          due_date: "",
          submission_link: "", // ✅ Reset
          trainee_id: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to create assignment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create New Assignment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            name="title"
            placeholder="Assignment Title"
            value={form.title}
            onChange={handleChange}
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />
          <Input
            type="datetime-local"
            name="due_date"
            value={form.due_date}
            onChange={handleChange}
          />
          <Input
            type="url"
            name="submission_link"
            placeholder="Submission Link (optional)"
            value={form.submission_link}
            onChange={handleChange}
          />

          <div>
            <label className="block mb-1 font-medium text-sm">Assign to Trainee</label>
            <select
              name="trainee_id"
              value={form.trainee_id}
              onChange={(e) => setForm({ ...form, trainee_id: e.target.value })}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select Trainee</option>
              {trainees.map((trainee) => (
                <option key={trainee.id} value={trainee.id}>
                  {trainee.username}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={handleSubmit} disabled={loading || !form.trainee_id}>
            {loading ? "Creating..." : "Create Assignment"}
          </Button>

          {message && <div className="text-sm text-blue-500 mt-2">{message}</div>}
        </CardContent>
      </Card>
    </div>
  );
}
