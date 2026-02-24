import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { mockMeetings, mockAssignmentDeadlines } from '../data/mockData'

function EventModal({ event, onClose, onJoin, onViewRecording }) {
  if (!event) return null
  const isRecording = event.extendedProps?.type === 'recording'
  const isLive = event.extendedProps?.type === 'live'
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="card-soft p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {event.start && new Date(event.start).toLocaleString()} – {event.end && new Date(event.end).toLocaleTimeString()}
        </p>
        <div className="flex gap-2">
          {(isLive || !isRecording) && (
            <button
              type="button"
              onClick={() => { onJoin?.(); onClose(); }}
              className="px-4 py-2 rounded-btn bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
            >
              Join class
            </button>
          )}
          {(isRecording || event.extendedProps?.type === 'upcoming') && (
            <button
              type="button"
              onClick={() => { onViewRecording?.(); onClose(); }}
              className="px-4 py-2 rounded-btn border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View Recording
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-btn border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Calendar() {
  const [searchParams] = useSearchParams()
  const focusToday = searchParams.get('day') === 'today'
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = useMemo(() => {
    const meetingEvents = mockMeetings.map((m) => ({
      id: m.id,
      title: m.title,
      start: m.start,
      end: m.end,
      extendedProps: { type: m.type, courseCode: m.courseCode },
      ...(m.type === 'recording' && { backgroundColor: '#6b7280', borderColor: '#6b7280' }),
      ...(m.type === 'live' && { backgroundColor: '#f97316', borderColor: '#f97316' }),
    }))
    const deadlineEvents = mockAssignmentDeadlines.map((a) => ({
      id: a.id,
      title: a.title,
      start: a.start,
      end: a.end,
      extendedProps: { type: a.type },
      backgroundColor: '#dc2626',
      borderColor: '#dc2626',
    }))
    return [...meetingEvents, ...deadlineEvents]
  }, [])

  const initialDate = focusToday ? new Date().toISOString().slice(0, 10) : undefined

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
      <div className="card-soft p-4 overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate={initialDate}
          events={events}
          eventClick={({ event }) => setSelectedEvent(event)}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          height="auto"
          eventDisplay="block"
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
        />
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onJoin={() => {}}
          onViewRecording={() => {}}
        />
      )}
    </div>
  )
}
