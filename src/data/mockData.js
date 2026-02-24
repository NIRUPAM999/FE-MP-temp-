const today = new Date()
const todayStr = today.toISOString().slice(0, 10)

export const mockMeetings = [
  { id: 'm1', title: 'Algebra QOA_SH24_BC_09_S_A', start: `${todayStr}T10:00:00`, end: `${todayStr}T10:45:00`, type: 'recording', courseCode: 'QOA_SH24_BC_09_S_A' },
  { id: 'm2', title: 'Geometry QOA_SH24_BC_08_S_A', start: `${todayStr}T11:00:00`, end: `${todayStr}T11:45:00`, type: 'live', courseCode: 'QOA_SH24_BC_08_S_A' },
  { id: 'm3', title: 'Math Review Session QOA_SH24_BC_10_S_B', start: `${todayStr}T12:00:00`, end: `${todayStr}T12:45:00`, type: 'upcoming', courseCode: 'QOA_SH24_BC_10_S_B' },
  { id: 'm4', title: 'Calculus QOA_SH24_BC_04_S_A', start: `${todayStr}T13:00:00`, end: `${todayStr}T13:45:00`, type: 'upcoming', courseCode: 'QOA_SH24_BC_04_S_A' },
  { id: 'm5', title: 'Geometry QOA_SH24_BC_09_S_A', start: `${todayStr}T14:00:00`, end: `${todayStr}T14:45:00`, type: 'upcoming', courseCode: 'QOA_SH24_BC_09_S_A' },
]

export const mockAssignmentDeadlines = [
  { id: 'a1', title: 'Algebra fractions quiz – Due', start: `${todayStr}T12:53:00`, end: `${todayStr}T13:00:00`, type: 'deadline' },
  { id: 'a2', title: 'Solving Equations – Due', start: `${todayStr}T14:00:00`, end: `${todayStr}T14:05:00`, type: 'deadline' },
]

export const mockCourses = [
  { id: 'c1', name: 'Algebra Fundamentals', instructor: 'Dr. Sarah Chen', progress: 65, nextSession: 'Oct 7, 10:00 am', code: 'QOA_SH24_BC_09_S_A' },
  { id: 'c2', name: 'Geometry & Proofs', instructor: 'Prof. James Wilson', progress: 40, nextSession: 'Oct 8, 11:00 am', code: 'QOA_SH24_BC_08_S_A' },
  { id: 'c3', name: 'Calculus I', instructor: 'Dr. Emily Brown', progress: 80, nextSession: 'Oct 6, 1:00 pm', code: 'QOA_SH24_BC_04_S_A' },
  { id: 'c4', name: 'Math Review Session', instructor: 'Dr. Sarah Chen', progress: 25, nextSession: 'Oct 7, 12:00 pm', code: 'QOA_SH24_BC_10_S_B' },
]

export const mockLearners = [
  { id: 'l1', name: 'Xin Yue', email: 'xin.yue@example.com', course: 'Algebra Fundamentals', progress: 65, avatarColor: 'bg-purple-500' },
  { id: 'l2', name: 'Omar Farooq', email: 'omar.f@example.com', course: 'Geometry & Proofs', progress: 40, avatarColor: 'bg-red-500' },
  { id: 'l3', name: 'Aisha Khan', email: 'aisha.k@example.com', course: 'Math Review Session', progress: 25, avatarColor: 'bg-green-500' },
  { id: 'l4', name: 'Leila Rahman', email: 'leila.r@example.com', course: 'Algebra Fundamentals', progress: 90, avatarColor: 'bg-amber-600' },
  { id: 'l5', name: 'Bilal Ahmed', email: 'bilal.a@example.com', course: 'Calculus I', progress: 80, avatarColor: 'bg-red-400' },
]

export const mockNews = [
  { id: 'n1', title: 'Mid-term exam schedule released', body: 'Please check the calendar for dates. All exams will be held in the main hall.', category: 'Exam', timestamp: '2024-10-01T09:00:00', isAdmin: true },
  { id: 'n2', title: 'New assignment: Algebra Week 5', body: 'Due by Friday. Submit via the course page.', category: 'Update', timestamp: '2024-10-02T14:00:00', isAdmin: true },
  { id: 'n3', title: 'System maintenance notice', body: 'Brief maintenance on Sunday 2–4 AM. No impact on submissions.', category: 'Important', timestamp: '2024-09-28T11:00:00', isAdmin: true },
]

export const activityTemplates = [
  { id: 'quiz', title: 'Quiz', description: 'Create a graded quiz with multiple question types', icon: '📝' },
  { id: 'assignment', title: 'Assignment', description: 'Add a homework or project assignment', icon: '📄' },
  { id: 'live', title: 'Live Class', description: 'Schedule a live session with students', icon: '🎥' },
  { id: 'ai-test', title: 'AI-Generated Test', description: 'Generate a test using AI (coming soon)', icon: '🤖' },
]

export const plans = [
  { id: 'free', name: 'Free', price: 0, features: ['Up to 3 courses', 'Basic analytics', 'Email support'], highlighted: false },
  { id: 'pro', name: 'Pro', price: 29, features: ['Unlimited courses', 'Advanced analytics', 'Priority support', 'Recorded sessions'], highlighted: true },
  { id: 'enterprise', name: 'Enterprise', price: 99, features: ['Everything in Pro', 'SSO', 'Dedicated success manager', 'Custom integrations'], highlighted: false },
]
