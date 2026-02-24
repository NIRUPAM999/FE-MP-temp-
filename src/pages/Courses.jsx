import { Link } from 'react-router-dom'
import { mockCourses } from '../data/mockData'

export default function Courses() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="card-soft p-6 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-2">{course.name}</h2>
              <span className="text-2xl font-bold text-orange-500 flex-shrink-0">{course.progress}%</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{course.instructor}</p>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Next session: {course.nextSession}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
