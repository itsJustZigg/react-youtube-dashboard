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
            <div style={{ height: 600, width: '100%', backgroundColor: "white"}}>
                <EventCalendar
                events={events}
                onEventsChange={setEvents}
                defaultVisibleDate='2026-05-20T14:00:00'
                />
            </div>
            <div style={{ height: 500, width: 250, backgroundColor: "white"}}>
                <h1 style={{color: "black"}}>Today's Tasks</h1>
                <StandaloneDayView
                events={todaysEvents}
                onEventsChange={setTodaysEvents}></StandaloneDayView>
            </div>
        </div>
    )

}