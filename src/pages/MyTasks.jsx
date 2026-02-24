import { Link, useLocation } from 'react-router-dom'
import { useStore } from '../store/useStore'

function formatDue(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) + ', ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

export default function MyTasks() {
  const location = useLocation()
  const path = location.pathname
  const isPending = path.endsWith('/pending')
  const isCompleted = path.endsWith('/completed')
  const tasks = useStore((s) => s.tasks)
  const updateTaskStatus = useStore((s) => s.updateTaskStatus)

  const filtered = isPending
    ? tasks.filter((t) => t.status === 'pending')
    : isCompleted
      ? tasks.filter((t) => t.status === 'done')
      : tasks

  const handleMarkDone = (e, id) => {
    e.preventDefault()
    e.stopPropagation()
    updateTaskStatus(id, 'done')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My tasks</h1>
        <div className="flex gap-2">
          <Link
            to="/tasks"
            className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${!isPending && !isCompleted ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            All
          </Link>
          <Link
            to="/tasks/pending"
            className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${isPending ? 'bg-orange-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            Pending
          </Link>
          <Link
            to="/tasks/completed"
            className={`px-4 py-2 rounded-btn text-sm font-medium transition-colors ${isCompleted ? 'bg-green-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            Done
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="card-soft p-12 text-center text-gray-500 dark:text-gray-400">
            <p>No tasks in this filter.</p>
            <Link to="/tasks" className="text-orange-500 hover:underline mt-2 inline-block">View all tasks</Link>
          </div>
        ) : (
          filtered.map((task) => (
            <div
              key={task.id}
              className="card-soft p-5 flex flex-wrap items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${task.avatarColor} flex items-center justify-center text-white font-medium flex-shrink-0`}>
                {task.studentName.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{task.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{task.courseName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{formatDue(task.dueDate)}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  task.status === 'done'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                }`}
              >
                {task.status === 'done' ? 'Done' : 'Pending'}
              </span>
              <div className="flex gap-2 flex-shrink-0">
                {task.status === 'pending' && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      className="px-4 py-2 rounded-btn bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                    >
                      Start Task
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleMarkDone(e, task.id)}
                      className="px-4 py-2 rounded-btn border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Mark as Done
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
