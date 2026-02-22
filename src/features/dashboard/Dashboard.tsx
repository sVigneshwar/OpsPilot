import React from 'react'
import KpiCard from '../../components/KpiCard'
import { useQuery } from '@tanstack/react-query'
import { fetchRevenue, fetchCustomers } from '../../services/api'
import RevenueChart from '../../components/RevenueChart'
import DataTable from '../../components/DataTable'

export default function Dashboard(){
  const { data } = useQuery({ queryKey: ['revenue'], queryFn: fetchRevenue })
  const { data: customers } = useQuery({ queryKey: ['customers'], queryFn: fetchCustomers })

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="kpi-grid">
        <div className="kpi card"><KpiCard title="Revenue" value={data?.totalRevenue ?? '$—'} /></div>
        <div className="kpi card"><KpiCard title="Active Users" value={data?.activeUsers ?? '—'} /></div>
        <div className="kpi card"><KpiCard title="Churn" value={data?.churn ?? '—'} /></div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr', gap:12, marginTop:16}}>
        <RevenueChart data={data?.months || []} />
        <div className="card">
          <h3>Customers</h3>
          <DataTable data={customers || []} />
        </div>
      </div>
    </div>
  )
}
