import React from 'react'

export default function KpiCard({ title, value }: { title: string; value: any }){
  return (
    <div>
      <div style={{fontSize:12, opacity:0.8}}>{title}</div>
      <div style={{fontSize:22, marginTop:6}}>{value}</div>
    </div>
  )
}
