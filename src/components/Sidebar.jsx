import { NavLink } from 'react-router-dom'
import { useStore } from '../store/useStore'

const navItems = [
  { path: '/', label: 'Dashboard', icon: GridIcon },
  { path: '/tasks', label: 'My tasks', icon: TasksIcon, badge: true },
  { path: '/courses', label: 'Courses', icon: BookIcon },
  { path: '/learners', label: 'Learners', icon: UsersIcon },
  { path: '/calendar', label: 'Calendar', icon: CalendarIcon },
  { path: '/plans', label: 'Plans', icon: TagIcon },
  { path: '/news', label: 'News', icon: StarIcon },
  { path: '/activity-templates', label: 'Activity Templates', icon: SearchIcon },
]

const generalEnd = 5
const otherStart = 5

function GridIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 16a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM6 16a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2v2z" />
    </svg>
  )
}
function TasksIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}
function BookIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}
function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}
function TagIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}
function StarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

export default function Sidebar() {
  const sidebarOpen = useStore((s) => s.sidebarOpen)
  const toggleSidebar = useStore((s) => s.toggleSidebar)
  const tasks = useStore((s) => s.tasks)
  const pendingCount = tasks.filter((t) => t.status === 'pending').length

  return (
    <aside
      className={`sidebar-bg text-gray-200 min-h-screen transition-all duration-300 flex flex-col ${
        sidebarOpen ? 'w-56' : 'w-20'
      }`}
    >
      <div className="p-4 flex items-center justify-between border-b border-white/10">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold text-sm">V</div>
            <span className="font-semibold text-white whitespace-nowrap">VEDRA</span>
          </div>
        )}
        <button
          type="button"
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            )}
          </svg>
        </button>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className="text-[10px] uppercase tracking-wider text-gray-400 px-3 mb-2">{sidebarOpen && 'GENERAL'}</div>
        {navItems.slice(0, generalEnd).map((item) => (
          <NavItem key={item.path} item={item} sidebarOpen={sidebarOpen} pendingCount={item.badge ? pendingCount : 0} />
        ))}
        <div className="text-[10px] uppercase tracking-wider text-gray-400 px-3 mt-4 mb-2">{sidebarOpen && 'OTHER'}</div>
        {navItems.slice(otherStart).map((item) => (
          <NavItem key={item.path} item={item} sidebarOpen={sidebarOpen} pendingCount={item.badge ? pendingCount : 0} />
        ))}
      </nav>
    </aside>
  )
}

function NavItem({ item, sidebarOpen, pendingCount }) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 ${
          isActive ? 'sidebar-active' : 'text-gray-300 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      <Icon />
      {sidebarOpen && (
        <>
          <span className="flex-1 truncate">{item.label}</span>
          {item.badge && pendingCount > 0 && (
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
              {pendingCount}
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}
