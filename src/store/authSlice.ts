import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = { token: string | null; user?: { email:string; role: 'admin'|'analyst' } }

const initialState: AuthState = { token: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; email: string; role?: 'admin'|'analyst' }>) {
      state.token = action.payload.token
      state.user = { email: action.payload.email, role: action.payload.role || 'analyst' }
    },
    logout(state) {
      state.token = null
      state.user = undefined
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
