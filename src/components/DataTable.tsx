import React, { useMemo, useState } from 'react'

export default function DataTable({ data }:{ data: any[] }){
  const [q, setQ] = useState('')
  const [sortKey, setSortKey] = useState<string | null>(null)

  const filtered = useMemo(()=>{
    let arr = data.slice()
    if(q) arr = arr.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q.toLowerCase()))
    if(sortKey) arr.sort((a,b)=> (a[sortKey]>b[sortKey]?1:-1))
    return arr
  },[data,q,sortKey])

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
        <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
        <div>
          <button onClick={()=>setSortKey('name')}>Sort name</button>
          <button onClick={()=>setSortKey('revenue')}>Sort revenue</button>
        </div>
      </div>
      <table style={{width:'100%'}}>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Revenue</th></tr>
        </thead>
        <tbody>
          {filtered.map(r=> (
            <tr key={r.id}><td>{r.name}</td><td>{r.email}</td><td>{r.revenue}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
