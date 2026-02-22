import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Login from '../features/auth/Login'

test('renders login and allows demo login', ()=>{
  render(<Provider store={store}><Login/></Provider>)
  expect(screen.getByText(/OpsPilot — Demo Login/i)).toBeInTheDocument()
})
