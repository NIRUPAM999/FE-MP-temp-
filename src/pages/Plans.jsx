import { plans } from '../data/mockData'

export default function Plans() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`card-soft p-6 flex flex-col ${
              plan.highlighted ? 'ring-2 ring-orange-500 shadow-lg scale-[1.02]' : ''
            } transition-all duration-200`}
          >
            {plan.highlighted && (
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">Popular</span>
            )}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{plan.name}</h2>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
              {plan.price > 0 && <span className="text-gray-500 dark:text-gray-400 text-sm">/mo</span>}
            </div>
            <ul className="space-y-3 flex-1 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`w-full py-3 rounded-btn font-medium transition-colors ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                  : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {plan.price === 0 ? 'Current plan' : 'Upgrade Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
