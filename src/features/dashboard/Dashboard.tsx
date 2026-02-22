import React from 'react'
import KpiCard from '../../components/KpiCard'
import { useQuery } from '@tanstack/react-query'
import { fetchRevenue, fetchCustomers, fetchCategories } from '../../services/api'
import RevenueChart from '../../components/RevenueChart'
import DataTable from '../../components/DataTable'
import PieChartComponent from '../../components/PieChartComponent'

export default function Dashboard(){
  const { data } = useQuery({ queryKey: ['revenue'], queryFn: fetchRevenue })
  const { data: customers } = useQuery({ queryKey: ['customers'], queryFn: fetchCustomers })
  const { data: categories } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories })

  const totalOrders = data?.months?.reduce((sum: number, m: any) => sum + (m.orders || 0), 0) || 0
  const avgConversion = data?.months?.reduce((sum: number, m: any) => sum + (m.conversion || 0), 0) / (data?.months?.length || 1) || 0

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="kpi-grid">
        <div className="kpi card">
          <KpiCard title="Total Revenue" value={`$${(data?.totalRevenue / 1000).toFixed(1)}K`} change="+12.5%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Active Users" value={data?.activeUsers ?? '—'} change="+8.2%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Churn Rate" value={`${data?.churn}%` ?? '—'} change="-0.8%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Total Orders" value={totalOrders.toLocaleString()} change="+14.3%" />
        </div>
      </div>

      <div className="charts-grid">
        <RevenueChart data={data?.months || []} />
        <PieChartComponent 
          data={categories || []} 
          dataKey="value" 
          nameKey="name" 
          title="Revenue by Category"
        />
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="kpi card">
          <div className="kpi-title">Avg Conversion</div>
          <div className="kpi-value">{avgConversion.toFixed(1)}%</div>
        </div>
        <div className="kpi card">
          <div className="kpi-title">Total Customers</div>
          <div className="kpi-value">{customers?.length || 0}</div>
        </div>
        <div className="kpi card">
          <div className="kpi-title">Premium Customers</div>
          <div className="kpi-value">{customers?.filter((c: any) => c.status === 'Premium').length || 0}</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Recent Customers</h3>
        <DataTable data={customers || []} />
      </div>
    </div>
  )
}
