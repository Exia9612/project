import { ILogin } from "dto/login"
import { ParameterizedContext } from "koa"
import serviceUser from './user'

const { encryptWithSalt } = serviceUser

const checkLoginData = (data: ILogin) => {
  if (!data.username || !data.password) return false
  return true
}

const login = async (ctx: ParameterizedContext) => {
  const loginData: ILogin = ctx.request.body
  const { username, password } = loginData
  const user = await ctx.model.User.findOne({
    username
  })
  const salt = await ctx.model.Salt.findOne({
    userId: user._id
  })
  const hashPassword = encryptWithSalt(password, salt.salt)
  if (hashPassword !== user.password) {
    return null
  }
  // const session = await ctx.model.Session.create({
  //   userId: user._id,
  //   createdTime: new Date()
  // })
  return {
    userId: user._id
  } 
}

export default {
  login,
  checkLoginData
}