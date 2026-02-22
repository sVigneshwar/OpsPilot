import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const COLORS = ['#1a73e8', '#34a853', '#fbbc04', '#ea4335', '#9334e6', '#ff6d00']

interface PieChartComponentProps {
  data: any[]
  dataKey: string
  nameKey: string
  title?: string
}

export default function PieChartComponent({ data, dataKey, nameKey, title }: PieChartComponentProps) {
  return (
    <div className="card" style={{ height: '400px' }}>
      {title && <h3>{title}</h3>}
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey={dataKey}
            nameKey={nameKey}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
