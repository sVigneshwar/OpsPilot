import React from 'react'

interface KpiCardProps {
  title: string;
  value: any;
  change?: string;
  isNegative?: boolean;
}

export default function KpiCard({ title, value, change, isNegative }: KpiCardProps){
  return (
    <div>
      <div className="kpi-title">{title}</div>
      <div className="kpi-value">{value}</div>
      {change && (
        <div className={`kpi-change ${isNegative ? 'negative' : 'positive'}`}>
          <span className="material-icons" style={{fontSize: '16px'}}>
            {isNegative ? 'trending_down' : 'trending_up'}
          </span>
          {change}
        </div>
      )}
    </div>
  )
}
