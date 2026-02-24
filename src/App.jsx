import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from './store/useStore'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyTasks from './pages/MyTasks'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Learners from './pages/Learners'
import Calendar from './pages/Calendar'
import Plans from './pages/Plans'
import News from './pages/News'
import ActivityTemplates from './pages/ActivityTemplates'
import Profile from './pages/Profile'

function ApplyTheme() {
  const theme = useStore((s) => s.theme)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])
  return null
}

export default function App() {
  const isAuthenticated = useStore((s) => s.isAuthenticated)

  return (
    <>
      <ApplyTheme />
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" replace />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<MyTasks />} />
          <Route path="tasks/pending" element={<MyTasks filter="pending" />} />
          <Route path="tasks/completed" element={<MyTasks filter="done" />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="learners" element={<ProtectedRoute allowedRoles={['Admin', 'Instructor']}><Learners /></ProtectedRoute>} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="plans" element={<Plans />} />
          <Route path="news" element={<News />} />
          <Route path="activity-templates" element={<ActivityTemplates />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
      </Routes>
    </>
  )
}
