import api from '@/api/api'
import { UserDef } from '@/store/auth.store'

export type LoginParams = {
  email: string
  password: string
}

export type LoginRespone = {
  accessToken: string
  user: UserDef
}

export const login = async (params: LoginParams): Promise<LoginRespone> => {
  return await api.post('/auth/login', params)
}
