"use client"
import { useEffect, useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

type EventType = {
  id: number
  title: string
  date: string
}

export default function MentorCalendarPage() {
  const [events, setEvents] = useState<EventType[]>([])

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/events",{credentials:"include",})
      const data = await res.json()
      setEvents(data)
    } catch (err) {
      console.error("Error fetching events", err)
    }
  }

  const handleDateClick = async (arg: any) => {
    const title = prompt("Enter event title:")
    if (!title) return

    try {
      const res = await fetch("http://localhost:8000/api/events", {
        credentials:"include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date: arg.dateStr }),
      })
      if (!res.ok) throw new Error("Failed to create event")
      const newEvent = await res.json()
      setEvents((prev) => [...prev, newEvent])
    } catch (err) {
      console.error("Error creating event", err)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Mentor Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
      />
    </div>
  )
}
