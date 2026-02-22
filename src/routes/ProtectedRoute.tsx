import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import type { RootState } from '../store'

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const token = useSelector((s: RootState) => s.auth.token)
  if (!token) return <Navigate to="/login" replace />
  return children
}

export default ProtectedRoute
