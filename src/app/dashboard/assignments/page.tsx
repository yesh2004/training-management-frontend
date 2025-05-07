"use client"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  FileText,
  Link,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

interface Assignment {
  title: string;
  description: string;
  due_date: string;
  status: string;
  submission_link: string;
  is_completed: boolean;
  id: number;
}

function Page() {
  const [assignments, setAssignments] = useState<Assignment[] | null>(null);

  const fetchAssignments = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/assignments", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setAssignments(data);
    } catch (error) {
      console.error("Failed to fetch assignments:", error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const markAsComplete = async (id: number) => {
    try {
      const response = await fetch("http://localhost:8000/api/assignments/mark-complete", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assignment_id: id }),
      });

      if (response.ok) {
        fetchAssignments(); // Refresh list after update
      }
    } catch (err) {
      console.error("Error marking assignment complete", err);
    }
  };

  if (!assignments) return <div>Loading...</div>;

  return (
    <div>
      <section className="ml-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h2>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {assignments.map((data, index) => (
                  <div className="flex items-center justify-between p-4" key={index}>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-md">
                        <a href={data.submission_link}>
                        <FileText className="h-5 w-5 text-red-600" />
                        </a>
                      </div>
                      <div>
                        <a href ={data.submission_link}>
                        <h3 className="font-medium">{data.title}</h3>
                        <p className="text-sm text-gray-500">{data.description}</p>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        Due on {new Date(data.due_date).toLocaleDateString()}
                      </Badge>
                      <input
                        type="checkbox"
                        checked={data.is_completed}
                        disabled={data.is_completed}
                        onChange={() => markAsComplete(data.id)}
                        className="cursor-pointer h-5 w-5"
                        title="Mark as completed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Page;
