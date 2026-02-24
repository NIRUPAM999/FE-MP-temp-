import { useState } from 'react'
import { activityTemplates } from '../data/mockData'

function CreateModal({ template, onClose }) {
  if (!template) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="card-soft p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create {template.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{template.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">This is a mock creation flow. In production, a full form would open here.</p>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-btn border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-btn bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ActivityTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activityTemplates.map((t) => (
          <div
            key={t.id}
            className="card-soft p-6 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-2xl mb-4">
              {t.icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex-1 mb-4">{t.description}</p>
            <button
              type="button"
              onClick={() => setSelectedTemplate(t)}
              className="w-full py-2.5 rounded-btn bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Create
            </button>
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <CreateModal template={selectedTemplate} onClose={() => setSelectedTemplate(null)} />
      )}
    </div>
  )
}
