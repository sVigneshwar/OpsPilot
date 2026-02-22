import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/authSlice'

type Form = { email: string; password: string }

export default function Login(){
  const { register, handleSubmit } = useForm<Form>({ defaultValues: { email: 'demo@opspilot.com', password: 'Demo123' } })
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = (d:Form & { role?: 'admin'|'analyst' }) => {
    dispatch(login({ token: 'demo-token', email: d.email, role: d.role || 'analyst' }))
    nav('/dashboard')
  }

  return (
    <div className="login card">
      <h2>OpsPilot — Demo Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <label>Password</label>
        <input type="password" {...register('password')} />
        <label>Role (demo)</label>
        <select {...register('role')}>
          <option value="admin">Admin</option>
          <option value="analyst">Analyst</option>
        </select>
        <div style={{display:'flex',gap:8}}>
          <button className="btn" type="submit">Explore Demo</button>
        </div>
      </form>
      <p style={{marginTop:12}}>Demo: demo@opspilot.com / Demo123</p>
    </div>
  )
}
