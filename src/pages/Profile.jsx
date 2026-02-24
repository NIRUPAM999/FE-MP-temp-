import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function Profile() {
  const user = useStore((s) => s.user)
  const role = useStore((s) => s.role)
  const logout = useStore((s) => s.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
      <div className="card-soft p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-semibold">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{user?.email || 'User'}</p>
            <span className="inline-flex mt-1 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
              {role}
            </span>
          </div>
        </div>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Email</dt>
            <dd className="font-medium text-gray-900 dark:text-white mt-0.5">{user?.email || '—'}</dd>
          </div>
          <div>
            <dt className="text-gray-500 dark:text-gray-400">Role</dt>
            <dd className="font-medium text-gray-900 dark:text-white mt-0.5">{role}</dd>
          </div>
        </dl>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-btn border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
