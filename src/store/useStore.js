import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      // Auth
      user: null,
      role: 'Student', // Admin | Instructor | Student
      isAuthenticated: false,
      login: (email, role) =>
        set({
          user: { email },
          role: role || 'Student',
          isAuthenticated: true,
        }),
      logout: () =>
        set({ user: null, role: 'Student', isAuthenticated: false }),

      // Theme: 'light' | 'dark'
      theme: 'light',
      setTheme: (theme) => set({ theme }),

      // Sidebar
      sidebarOpen: true,
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),

      // Tasks (in-memory for real-time updates)
      tasks: [
        {
          id: '1',
          title: 'Algebra fractions quiz',
          courseName: 'QOA_SH24_BC_09_S_A',
          dueDate: '2024-10-05T12:53:00',
          status: 'pending',
          studentName: 'Xin Yue',
          avatarColor: 'bg-purple-500',
        },
        {
          id: '2',
          title: 'Solving Equations',
          courseName: 'QOA_SH24_BC_08_S_A',
          dueDate: '2024-10-05T14:00:00',
          status: 'pending',
          studentName: 'Omar Farooq',
          avatarColor: 'bg-red-500',
        },
        {
          id: '3',
          title: 'Geometry proof',
          courseName: 'QOA_SH24_BC_10_S_B',
          dueDate: '2024-10-06T10:00:00',
          status: 'pending',
          studentName: 'Aisha Khan',
          avatarColor: 'bg-green-500',
        },
        {
          id: '4',
          title: 'Trigonometry review',
          courseName: 'QOA_SH24_BC_09_S_A',
          dueDate: '2024-10-04T09:00:00',
          status: 'done',
          studentName: 'Leila Rahman',
          avatarColor: 'bg-amber-600',
        },
        {
          id: '5',
          title: 'Calculus limits',
          courseName: 'QOA_SH24_BC_04_S_A',
          dueDate: '2024-10-03T16:00:00',
          status: 'done',
          studentName: 'Bilal Ahmed',
          avatarColor: 'bg-red-400',
        },
      ],
      setTasks: (tasks) => set({ tasks }),
      updateTaskStatus: (id, status) =>
        set((s) => ({
          tasks: s.tasks.map((t) => (t.id === id ? { ...t, status } : t)),
        })),
    }),
    { name: 'lms-store', partialize: (s) => ({ theme: s.theme, role: s.role, isAuthenticated: s.isAuthenticated, user: s.user }) }
  )
)
