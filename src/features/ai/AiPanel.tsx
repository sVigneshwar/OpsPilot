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
    <div className="card">
      <h2>AI Insights</h2>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} rows={4} style={{width:'100%'}} />
      <div style={{marginTop:8}}>
        <button className="btn" onClick={callAi} disabled={loading}>{loading? 'Processing...':'Run'}</button>
      </div>
      {resp && <div style={{marginTop:12}} className="card"><pre>{resp}</pre></div>}
    </div>
  )
}
