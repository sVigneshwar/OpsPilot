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
      <h2>Welcome to OpsPilot</h2>
      <p>Sign in to continue to your dashboard</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input {...register('email')} type="email" placeholder="Enter your email" />
        </div>
        
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} placeholder="Enter your password" />
        </div>
        
        <div>
          <label>Role (Demo Only)</label>
          <select {...register('role')}>
            <option value="admin">Admin</option>
            <option value="analyst">Analyst</option>
          </select>
        </div>
        
        <button className="btn" type="submit" style={{width: '100%', marginTop: '8px'}}>
          Sign In
        </button>
      </form>
      
      <div className="demo-note">
        <strong>Demo Credentials:</strong><br/>
        Email: demo@opspilot.com<br/>
        Password: Demo123
      </div>
    </div>
  )
}
