import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import type { RootState } from '../store'

type Props = { children: React.ReactElement, roles?: ('admin'|'analyst')[] }

const RoleRoute: React.FC<Props> = ({ children, roles }) => {
  const user = useSelector((s: RootState) => s.auth.user)
  if (!user) return <Navigate to="/login" replace />
  if (roles && !roles.includes(user.role)) return <div className="card">Access denied</div>
  return children
}

export default RoleRoute
