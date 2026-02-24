import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { mockMeetings } from '../data/mockData'

function formatTime(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

function formatDue(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ', ' + formatTime(dateStr)
}

const today = new Date()
const todayStr = today.toISOString().slice(0, 10)
const meetingsToday = mockMeetings.filter((m) => m.start.startsWith(todayStr))

export default function Dashboard() {
  const tasks = useStore((s) => s.tasks)
  const pendingCount = tasks.filter((t) => t.status === 'pending').length
  const doneCount = tasks.filter((t) => t.status === 'done').length
  const displayTasks = tasks.slice(0, 5)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/calendar?day=today"
          className="card-soft p-5 flex flex-col hover:shadow-lg transition-shadow duration-200 group"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{meetingsToday.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Meetings today</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-orange-500 mt-2 inline-block">
                View all &gt;
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </Link>
        <Link
          to="/tasks/pending"
          className="card-soft p-5 flex flex-col hover:shadow-lg transition-shadow duration-200 group"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{pendingCount}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Pending tasks</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-orange-500 mt-2 inline-block">
                View all &gt;
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
          </div>
        </Link>
        <Link
          to="/tasks/completed"
          className="card-soft p-5 flex flex-col hover:shadow-lg transition-shadow duration-200 group"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{doneCount}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Done tasks</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-orange-500 mt-2 inline-block">
                View all &gt;
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My tasks */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">My tasks</h2>
            <Link to="/tasks" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              View all &gt;
            </Link>
          </div>
          <div className="card-soft divide-y divide-gray-100 dark:divide-gray-700">
            {displayTasks.map((task) => (
              <Link
                key={task.id}
                to="/tasks"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full ${task.avatarColor} flex items-center justify-center text-white text-sm font-medium flex-shrink-0`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white truncate">{task.title}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {formatDue(task.dueDate)}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Today's schedule */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Today, {today.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' })}
            </h2>
            <div className="flex gap-1">
              <button type="button" className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Previous day">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button type="button" className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Next day">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="card-soft divide-y divide-gray-100 dark:divide-gray-700 space-y-0">
            {mockMeetings.map((m, i) => (
              <Link
                key={m.id}
                to="/calendar"
                className={`block p-4 transition-colors ${
                  i === 1 ? 'bg-orange-50 dark:bg-orange-900/20 rounded-lg mx-1 my-1' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <p className={`font-medium ${i === 1 ? 'text-orange-700 dark:text-orange-300' : 'text-gray-900 dark:text-white'}`}>
                  {m.title.split(' ')[0]}
                </p>
                <p className={`text-sm mt-1 ${i === 1 ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-300'}`}>
                  {formatTime(m.start)}
                </p>
                {m.type === 'recording' && (
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                    Recording
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
