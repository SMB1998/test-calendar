
import MainLayout from '../components/layouts/MainLayout'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import iCalendarPlugin from '@fullcalendar/icalendar'

export default function Home() {

  return (
    <>
   
    <MainLayout>
      <main className="flex flex-col items-center min-h-screen p-10">
        
        <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, iCalendarPlugin]}

        events= {
          {
            url : 'https://outlook.office365.com/owa/calendar/b8de02ab938645f3b2d1001eda05ecfe@auditbrain.com/6a71079bf6bf425688adb1af6387e8a36239699716141768229/calendar.ics',
            format : 'ics'
          }
        }
        
      />
      </main>
    </MainLayout>
    
    
    </>
    
    
  )
}