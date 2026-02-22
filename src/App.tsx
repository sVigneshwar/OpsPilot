import React, { Suspense } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Login from './features/auth/Login'
import Dashboard from './features/dashboard/Dashboard'
import AiPanel from './features/ai/AiPanel'
import Analytics from './features/analytics/Analytics'
import Reports from './features/reports/Reports'
import Profile from './features/profile/Profile'
import Settings from './features/settings/Settings'
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRoute from './routes/RoleRoute'
import { logout } from './store/authSlice'
import type { RootState } from './store'

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/analytics', icon: 'analytics', label: 'Analytics' },
    { path: '/reports', icon: 'assessment', label: 'Reports' },
    { path: '/ai-insights', icon: 'psychology', label: 'AI Insights', requiresAdmin: true },
    { path: '/profile', icon: 'person', label: 'Profile' },
    { path: '/settings', icon: 'settings', label: 'Settings' },
  ]

  return (
    <div className="app-root">
      {isAuthenticated && (
        <>
          <nav className="top-nav">
            <Link to="/dashboard" className="nav-brand">
              <span className="material-icons logo-icon">dashboard</span>
              OpsPilot
            </Link>
            <div className="nav-links">
              <span style={{ fontSize: '14px', color: '#5f6368' }}>
                {user?.email}
              </span>
              <button onClick={handleLogout} className="logout-btn">
                <span className="material-icons" style={{ fontSize: '18px', marginRight: '4px' }}>logout</span>
                Logout
              </button>
            </div>
          </nav>

          <div className="sidebar">
            {navItems.map((item) => {
              if (item.requiresAdmin && user?.role !== 'admin') return null
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  title={item.label}
                >
                  <span className="material-icons">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </>
      )}
      
      <div className={isAuthenticated ? 'main-content' : ''}>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics/></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>} />
            <Route path="/ai-insights" element={<ProtectedRoute><RoleRoute roles={["admin"]}><AiPanel/></RoleRoute></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
