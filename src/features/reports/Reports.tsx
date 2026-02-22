import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchRevenue, fetchCustomers } from '../../services/api'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

export default function Reports() {
  const { data: revenueData } = useQuery({ queryKey: ['revenue'], queryFn: fetchRevenue })
  const { data: customers } = useQuery({ queryKey: ['customers'], queryFn: fetchCustomers })

  const topCustomers = customers?.sort((a: any, b: any) => b.revenue - a.revenue).slice(0, 10) || []
  const totalCustomerRevenue = customers?.reduce((sum: number, c: any) => sum + c.revenue, 0) || 0

  return (
    <div className="dashboard-container">
      <h1>Reports</h1>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h3>Monthly Performance Analysis</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={revenueData?.months || []}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fill: '#5f6368', fontSize: 12 }} />
            <YAxis tick={{ fill: '#5f6368', fontSize: 12 }} />
            <Tooltip 
              contentStyle={{
                background: '#fff',
                border: '1px solid #dadce0',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#1a73e8" name="Revenue" />
            <Bar dataKey="activeUsers" fill="#34a853" name="Active Users" />
            <Bar dataKey="orders" fill="#fbbc04" name="Orders" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="kpi-grid">
        <div className="kpi card">
          <div className="kpi-title">Total Customers</div>
          <div className="kpi-value">{customers?.length || 0}</div>
        </div>
        <div className="kpi card">
          <div className="kpi-title">Customer Revenue</div>
          <div className="kpi-value">${(totalCustomerRevenue / 1000).toFixed(1)}K</div>
        </div>
        <div className="kpi card">
          <div className="kpi-title">Avg Revenue/Customer</div>
          <div className="kpi-value">${customers?.length ? (totalCustomerRevenue / customers.length).toFixed(0) : 0}</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Top 10 Customers by Revenue</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Email</th>
              <th>Revenue</th>
              <th>Status</th>
              <th>Last Order</th>
            </tr>
          </thead>
          <tbody>
            {topCustomers.map((customer: any, idx: number) => (
              <tr key={customer.id}>
                <td><strong>#{idx + 1}</strong></td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td><strong>${customer.revenue.toLocaleString()}</strong></td>
                <td>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    background: customer.status === 'Premium' ? '#e8f5e9' : '#e3f2fd',
                    color: customer.status === 'Premium' ? '#2e7d32' : '#1565c0'
                  }}>
                    {customer.status}
                  </span>
                </td>
                <td>{customer.lastOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
