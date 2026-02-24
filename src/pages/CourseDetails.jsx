import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mockCourses } from '../data/mockData'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'modules', label: 'Modules' },
  { id: 'assignments', label: 'Assignments' },
  { id: 'recorded', label: 'Recorded Sessions' },
]

const overviewContent = (
  <div className="space-y-4 text-gray-600 dark:text-gray-300">
    <p>This course covers core concepts with weekly live sessions and assignments. Progress is tracked automatically.</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Weekly live classes</li>
      <li>Quizzes and assignments</li>
      <li>Recorded sessions for review</li>
      <li>Discussion forum</li>
    </ul>
  </div>
)

const modulesContent = (
  <div className="space-y-3">
    {['Module 1: Foundations', 'Module 2: Core Topics', 'Module 3: Advanced Concepts', 'Module 4: Projects'].map((m, i) => (
      <div key={i} className="card-soft p-4 flex items-center justify-between">
        <span className="font-medium text-gray-900 dark:text-white">{m}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{i < 2 ? 'Completed' : 'Upcoming'}</span>
      </div>
    ))}
  </div>
)

const assignmentsContent = (
  <div className="space-y-3">
    {[
      { title: 'Algebra fractions quiz', due: 'Oct 5, 12:53 pm', status: 'Pending' },
      { title: 'Solving Equations', due: 'Oct 5, 2:00 pm', status: 'Pending' },
      { title: 'Trigonometry review', due: 'Oct 4', status: 'Done' },
    ].map((a, i) => (
      <div key={i} className="card-soft p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{a.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Due: {a.due}</p>
        </div>
        <span className={`text-sm font-medium ${a.status === 'Done' ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
          {a.status}
        </span>
      </div>
    ))}
  </div>
)

const recordedContent = (
  <div className="space-y-3">
    {[
      { title: 'Week 1 – Introduction', date: 'Sep 15, 2024', duration: '45 min' },
      { title: 'Week 2 – Core concepts', date: 'Sep 22, 2024', duration: '50 min' },
      { title: 'Week 3 – Practice', date: 'Sep 29, 2024', duration: '48 min' },
    ].map((r, i) => (
      <div key={i} className="card-soft p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{r.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{r.date} · {r.duration}</p>
        </div>
        <button type="button" className="px-3 py-1.5 rounded-btn bg-gray-200 dark:bg-gray-700 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          View Recording
        </button>
      </div>
    ))}
  </div>
)

export default function CourseDetails() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const course = mockCourses.find((c) => c.id === id)

  if (!course) {
    return (
      <div className="space-y-4">
        <Link to="/courses" className="text-orange-500 hover:underline">← Back to Courses</Link>
        <p className="text-gray-500 dark:text-gray-400">Course not found.</p>
      </div>
    )
  }

  const content =
    activeTab === 'overview'
      ? overviewContent
      : activeTab === 'modules'
        ? modulesContent
        : activeTab === 'assignments'
          ? assignmentsContent
          : recordedContent

  return (
    <div className="space-y-6">
      <Link to="/courses" className="text-orange-500 hover:underline inline-flex items-center gap-1">
        ← Back to Courses
      </Link>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{course.name}</h1>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium">
            {course.progress}% progress
          </span>
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 sticky top-14 z-10 bg-white dark:bg-gray-800 -mx-6 px-6 pb-0">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[200px]">{content}</div>
    </div>
  )
}
