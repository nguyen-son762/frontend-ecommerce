import { LoginRespone } from '@/services/auth.service'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type UserDef = {
  id: string
  email: string
  firstName: string
  lastName: string
  address: string | null
  phonenumber: string
  createdAt: string
  updatedAt: string
}

interface AuthState {
  user: UserDef | null
  accessToken: string
  setAuth: (user: LoginRespone) => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: '',
        setAuth: (values) => {
          set(() => ({ user: values.user, accessToken: values.accessToken }))
        },
      }),
      { name: 'authStore' }
    )
  )
)
