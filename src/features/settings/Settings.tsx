import React from 'react'

export default function Settings() {
  return (
    <div className="dashboard-container">
      <h1>Settings</h1>

      <div className="card" style={{ maxWidth: '800px' }}>
        <h3>Application Settings</h3>
        <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Language
            </label>
            <select style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              fontSize: '16px'
            }}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Timezone
            </label>
            <select style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              fontSize: '16px'
            }}>
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
              Date Format
            </label>
            <select style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              fontSize: '16px'
            }}>
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', marginTop: '20px' }}>
        <h3>Security Settings</h3>
        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '4px' }}>Two-Factor Authentication</div>
                <div style={{ fontSize: '13px', color: '#5f6368' }}>Add an extra layer of security</div>
              </div>
              <button className="btn btn-secondary">Enable</button>
            </div>
          </div>

          <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '4px' }}>Session Timeout</div>
                <div style={{ fontSize: '13px', color: '#5f6368' }}>Automatically log out after inactivity</div>
              </div>
              <select style={{
                padding: '8px 16px',
                border: '1px solid #dadce0',
                borderRadius: '8px',
                fontSize: '14px'
              }}>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>Never</option>
              </select>
            </div>
          </div>

          <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: '500', marginBottom: '4px' }}>Active Sessions</div>
                <div style={{ fontSize: '13px', color: '#5f6368' }}>Manage your active sessions</div>
              </div>
              <button className="btn btn-text">View All</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ maxWidth: '800px', marginTop: '20px' }}>
        <h3>Data & Privacy</h3>
        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Export Data</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Download all your data</div>
            </div>
            <button className="btn btn-secondary">Export</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>Clear Cache</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Clear local cached data</div>
            </div>
            <button className="btn btn-secondary">Clear</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '4px', color: '#ea4335' }}>Delete Account</div>
              <div style={{ fontSize: '13px', color: '#5f6368' }}>Permanently delete your account</div>
            </div>
            <button className="btn" style={{ background: '#ea4335' }}>Delete</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '32px', maxWidth: '800px' }}>
        <button className="btn">Save Changes</button>
      </div>
    </div>
  )
}
