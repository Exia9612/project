import { ILogin } from '@/type/login'
import axios from 'axios'

export const login = async (params: ILogin) => {
  return await axios.post('api/v1/login', params)
}