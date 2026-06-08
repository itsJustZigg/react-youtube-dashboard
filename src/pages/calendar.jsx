import { EventCalendar } from '@mui/x-scheduler/event-calendar'
// import { SchedulerEvent } from '@mui/x-scheduler/models'
import { useState } from 'react'
import { StandaloneDayView } from '@mui/x-scheduler'

export default function Calendar(){
    
    const [events, setEvents] = useState([
        {id:1, title: 'Intro', start: '2026-05-21T10:00:00', end: '2026-05-21T11:00:00'},
        {id:2, title: 'Epic is Hiding this from You', start: '2026-05-22T13:00:00', end: '2026-05-22T14:00:00'}
    ])

    const [todaysEvents, setTodaysEvents] = useState([
        {id: 1, title: 'Secret Easter Eggs in Droid Tycoon', start: '2026-05-20T14:30:00', end:'2026-05-20T15:30:00'}
    ])

    return(

        <div className='schedules-container'>
            <div style={{ overflowY:'auto', width: '100%', backgroundColor: "#e2e8f0", color: "black", padding: "8px"}}>
                <EventCalendar 
                events={events}
                views={['week', 'month']}
                onEventsChange={setEvents}
                defaultVisibleDate='2026-05-20T14:00:00'
                />
            </div>
            <div style={{overflowY:'auto', backgroundColor: "#e2e8f0", padding: "8px"}}>
                <h1 style={{color: "black"}}>Today's Tasks</h1>
                <StandaloneDayView 
                events={todaysEvents}
                onEventsChange={setTodaysEvents}></StandaloneDayView>
            </div>
        </div>
    )

}