import revenueData from '../../data/revenue.json'
import customers from '../../data/customers.json'

export async function fetchRevenue(){
  await new Promise(res => setTimeout(res, 300))
  const months = (revenueData as any)
  const totalRevenue = months.reduce((s:any,m:any)=>s + (m.revenue||0), 0)
  const activeUsers = months[months.length-1]?.activeUsers || 0
  const churn = months[months.length-1]?.churnRate || 0
  return { months, totalRevenue, activeUsers, churn }
}

export async function fetchCustomers(){
  await new Promise(res => setTimeout(res, 300))
  return (customers as any)
}
