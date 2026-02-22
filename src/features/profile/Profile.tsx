import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <div className="dashboard-container">
      <h1>Profile</h1>

      <div className="card" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a73e8 0%, #4285f4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            color: 'white',
            fontWeight: '500'
          }}>
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style={{ margin: '0 0 8px', fontSize: '28px', fontWeight: '400' }}>
              {user?.email?.split('@')[0]}
            </h2>
            <p style={{ margin: '0', color: '#5f6368', fontSize: '16px' }}>
              {user?.email}
            </p>
            <span style={{
              display: 'inline-block',
              marginTop: '8px',
              padding: '6px 16px',
              borderRadius: '16px',
              fontSize: '13px',
              fontWeight: '500',
              background: user?.role === 'admin' ? '#e8f5e9' : '#e3f2fd',
              color: user?.role === 'admin' ? '#2e7d32' : '#1565c0'
            }}>
              {user?.role === 'admin' ? 'Administrator' : 'Analyst'}
            </span>
          </div>
        </div>

        <h3>Account Information</h3>
        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#5f6368' }}>
              Email Address
            </label>
            <input 
              type="email" 
              value={user?.email || ''} 
              disabled 
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #dadce0',
                borderRadius: '8px',
                fontSize: '16px',
                background: '#f8f9fa'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#5f6368' }}>
              Role
            </label>
            <input 
              type="text" 
              value={user?.role || ''} 
              disabled 
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #dadce0',
                borderRadius: '8px',
                fontSize: '16px',
                background: '#f8f9fa',
                textTransform: 'capitalize'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#5f6368' }}>
              Account Status
            </label>
            <input 
              type="text" 
              value="Active" 
              disabled 
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #dadce0',
                borderRadius: '8px',
                fontSize: '16px',
                background: '#f8f9fa'
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
          <button className="btn">Update Profile</button>
          <button className="btn btn-secondary">Change Password</button>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', marginTop: '20px' }}>
        <h3>Preferences</h3>
        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Email Notifications</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Receive email updates about your account</div>
            </div>
            <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Weekly Reports</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Get weekly summaries of your data</div>
            </div>
            <input type="checkbox" defaultChecked style={{ width: '20px', height: '20px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Marketing Communications</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Receive news and updates</div>
            </div>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
