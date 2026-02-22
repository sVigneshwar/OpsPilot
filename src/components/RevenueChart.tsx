import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function RevenueChart({ data }:{ data: any[] }){
  return (
    <div className="card" style={{height: '400px'}}>
      <h3>Revenue Trend</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#5f6368', fontSize: 12 }}
            axisLine={{ stroke: '#dadce0' }}
          />
          <YAxis 
            tick={{ fill: '#5f6368', fontSize: 12 }}
            axisLine={{ stroke: '#dadce0' }}
          />
          <Tooltip 
            contentStyle={{
              background: '#fff',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#1a73e8" 
            strokeWidth={2}
            dot={{ fill: '#1a73e8', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
