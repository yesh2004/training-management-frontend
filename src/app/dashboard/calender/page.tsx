"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"





function page(){
    const handleDateClick = (arg:any) => {
        alert(arg.dateStr)
      }
    
  return (
    <div className='p-4'>
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin]}
      dateClick={handleDateClick}
      events={[
        { title: 'event 1', date: '2025-04-01' },
        { title: 'event 2', date: '2025-04-02' }
      ]}
      
    />
    </div>
  )
}

export default page