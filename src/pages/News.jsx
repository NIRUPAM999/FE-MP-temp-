import { mockNews } from '../data/mockData'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })
}

export default function News() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">News & Announcements</h1>
      <div className="space-y-4 max-w-2xl">
        {mockNews.map((item) => (
          <article key={item.id} className="card-soft p-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {item.category}
              </span>
              {item.isAdmin && (
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                  Admin
                </span>
              )}
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">{formatDate(item.timestamp)}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
