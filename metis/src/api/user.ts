import { IRegisterParams } from '@/type/login'
import axios from 'axios'

export const getUsers = () => {
  axios.get('')
}

export const registerUser = async (params: IRegisterParams) => {
  return await axios.post('/api/v1/users', params)
}