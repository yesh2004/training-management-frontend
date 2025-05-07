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

export default function TraineeCalendarPage() {
  const [events, setEvents] = useState<EventType[]>([])

  useEffect(() => {
    fetch("http://localhost:8000/api/events",{
      credentials: "include",
    })
      .then(res => res.json())
      .then(setEvents)
      .catch(err => console.error("Failed to load events", err))
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Events</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
