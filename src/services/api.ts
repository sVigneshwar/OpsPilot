import revenueData from '../../data/revenue.json'
import customers from '../../data/customers.json'
import categories from '../../data/categories.json'
import traffic from '../../data/traffic.json'
import regions from '../../data/regions.json'

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

export async function fetchCategories(){
  await new Promise(res => setTimeout(res, 200))
  return (categories as any)
}

export async function fetchTraffic(){
  await new Promise(res => setTimeout(res, 200))
  return (traffic as any)
}

export async function fetchRegions(){
  await new Promise(res => setTimeout(res, 200))
  return (regions as any)
}
