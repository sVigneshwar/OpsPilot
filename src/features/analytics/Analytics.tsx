import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCategories, fetchTraffic, fetchRegions } from '../../services/api'
import PieChartComponent from '../../components/PieChartComponent'
import KpiCard from '../../components/KpiCard'

export default function Analytics() {
  const { data: categories } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories })
  const { data: traffic } = useQuery({ queryKey: ['traffic'], queryFn: fetchTraffic })
  const { data: regions } = useQuery({ queryKey: ['regions'], queryFn: fetchRegions })

  const totalRegionalRevenue = regions?.reduce((sum: number, r: any) => sum + r.revenue, 0) || 0
  const totalVisitors = traffic?.reduce((sum: number, t: any) => sum + t.visitors, 0) || 0

  return (
    <div className="dashboard-container">
      <h1>Analytics</h1>

      <div className="kpi-grid">
        <div className="kpi card">
          <KpiCard title="Total Visitors" value={totalVisitors.toLocaleString()} change="+15.3%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Regional Revenue" value={`$${(totalRegionalRevenue / 1000).toFixed(0)}K`} change="+12.8%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Conversion Rate" value="5.8%" change="+0.4%" />
        </div>
        <div className="kpi card">
          <KpiCard title="Avg Order Value" value="$156" change="+8.2%" />
        </div>
      </div>

      <div className="charts-grid">
        <PieChartComponent 
          data={categories || []} 
          dataKey="value" 
          nameKey="name" 
          title="Revenue by Category"
        />
        <PieChartComponent 
          data={traffic || []} 
          dataKey="visitors" 
          nameKey="source" 
          title="Traffic Sources"
        />
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Regional Performance</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Region</th>
              <th>Revenue</th>
              <th>Customers</th>
              <th>Growth Rate</th>
            </tr>
          </thead>
          <tbody>
            {regions?.map((region: any) => (
              <tr key={region.region}>
                <td>{region.region}</td>
                <td>${region.revenue.toLocaleString()}</td>
                <td>{region.customers}</td>
                <td>
                  <span className={`kpi-change ${region.growth > 10 ? 'positive' : ''}`}>
                    {region.growth}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
