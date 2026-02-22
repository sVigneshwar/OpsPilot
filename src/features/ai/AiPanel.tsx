import React, { useState } from 'react'
import axios from 'axios'

export default function AiPanel(){
  const [prompt, setPrompt] = useState('Summarise revenue trends')
  const [resp, setResp] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const callAi = async () => {
    setLoading(true)
    try {
      const r = await axios.post('/api/ai/insights', { prompt })
      setResp(r.data?.result || JSON.stringify(r.data))
    } catch(e){ setResp('Error calling AI endpoint') }
    setLoading(false)
  }

  return (
    <div className="dashboard-container">
      <h1>AI Insights</h1>
      <div className="card">
        <h3>Ask AI about your data</h3>
        <textarea 
          value={prompt} 
          onChange={e=>setPrompt(e.target.value)} 
          rows={4} 
          style={{
            width:'100%',
            padding: '12px 16px',
            border: '1px solid #dadce0',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            resize: 'vertical'
          }} 
          placeholder="Enter your question about the data..."
        />
        <div style={{marginTop: '16px'}}>
          <button className="btn" onClick={callAi} disabled={loading}>
            {loading ? 'Processing...' : 'Generate Insights'}
          </button>
        </div>
      </div>
      {resp && (
        <div className="card" style={{marginTop: '20px'}}>
          <h3>Response</h3>
          <pre style={{
            background: '#f8f9fa',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>{resp}</pre>
        </div>
      )}
    </div>
  )
}
