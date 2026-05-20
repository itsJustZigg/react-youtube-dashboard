import { EventCalendar } from '@mui/x-scheduler/event-calendar'
// import { SchedulerEvent } from '@mui/x-scheduler/models'
import { useState } from 'react'

export default function Calendar(){
    // const initialEvents = [
    //     {id:1, title: 'Intro', start: new Date(2026, 4, 21, 10, 0), end: new Date(2026, 4,21, 11, 0)},
    //     {id:2, title: 'Epic is Hiding this from You', start: new Date(2026, 4, 22, 13, 0), end: new Date(2026, 4,22, 14, 0)}
    // ]

    const [events, setEvents] = useState([
        {id:1, title: 'Intro', start: new Date(2026, 4, 21, 10, 0), end: new Date(2026, 4,21, 11, 0)},
        {id:2, title: 'Epic is Hiding this from You', start: new Date(2026, 4, 22, 13, 0), end: new Date(2026, 4,22, 14, 0)}
    ])

    return(
        <div style={{ height: 600, width: '100%'}}>
            <EventCalendar 
            events={events}
            onEventsChange={setEvents}
            defaultVisibleDate={new Date(2026, 4, 19)}
            />
        </div>
    )

}