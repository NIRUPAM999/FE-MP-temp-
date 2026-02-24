import { Navigate } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function ProtectedRoute({ children, allowedRoles }) {
  const role = useStore((s) => s.role)
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }
  return children
}
