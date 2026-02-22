import React, { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './features/auth/Login'
import Dashboard from './features/dashboard/Dashboard'
import AiPanel from './features/ai/AiPanel'
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRoute from './routes/RoleRoute'

export default function App() {
  return (
    <div className="app-root">
      <nav className="top-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/ai-insights">AI Insights</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/ai-insights" element={<ProtectedRoute><RoleRoute roles={["admin"]}><AiPanel/></RoleRoute></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  )
}
