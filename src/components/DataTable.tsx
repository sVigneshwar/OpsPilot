import React, { useMemo, useState } from 'react'

export default function DataTable({ data }:{ data: any[] }){
  const [q, setQ] = useState('')
  const [sortKey, setSortKey] = useState<string | null>(null)

  const filtered = useMemo(()=>{
    let arr = data.slice()
    if(q) arr = arr.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q.toLowerCase()))
    if(sortKey) arr.sort((a,b)=> (a[sortKey]>b[sortKey]?1:-1))
    return arr.slice(0, 10) // Show top 10
  },[data,q,sortKey])

  return (
    <div>
      <div style={{display:'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap'}}>
        <input 
          placeholder="Search customers..." 
          value={q} 
          onChange={e=>setQ(e.target.value)}
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '8px 12px',
            border: '1px solid #dadce0',
            borderRadius: '20px',
            fontSize: '14px'
          }}
        />
        <button onClick={()=>setSortKey('name')} className="btn btn-text" style={{fontSize: '12px', padding: '6px 12px'}}>
          <span className="material-icons" style={{fontSize: '16px', marginRight: '4px'}}>sort_by_alpha</span>
          Name
        </button>
        <button onClick={()=>setSortKey('revenue')} className="btn btn-text" style={{fontSize: '12px', padding: '6px 12px'}}>
          <span className="material-icons" style={{fontSize: '16px', marginRight: '4px'}}>attach_money</span>
          Revenue
        </button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Revenue</th>
            <th>Status</th>
            <th>Last Order</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(r=> (
            <tr key={r.id}>
              <td><strong>{r.name}</strong></td>
              <td>{r.email}</td>
              <td><strong>${r.revenue?.toLocaleString()}</strong></td>
              <td>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  background: r.status === 'Premium' ? '#e8f5e9' : '#e3f2fd',
                  color: r.status === 'Premium' ? '#2e7d32' : '#1565c0'
                }}>
                  {r.status}
                </span>
              </td>
              <td>{r.lastOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
