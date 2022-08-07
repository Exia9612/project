import { IUser } from "dto/user";
import { ParameterizedContext } from "koa";
import { Types } from "mongoose";
import * as bcrypt from 'bcrypt'


const getUsers = async (ctx: ParameterizedContext) => {
  const users = await ctx.model.User.find()
  return users
}

const createUser = async (ctx: ParameterizedContext) => {
  const user: IUser = ctx.request.body
  let _id: Types.ObjectId
  const criypt = await encrypt(user.password)
  user.password = criypt.hashPassword

  await ctx.model.User.create(user)
    .then(newUser => _id = newUser._id)

  // 以后用消息队列替代，引入了副作用
  await createSalt(ctx, _id, criypt.salt)
  return _id
}

const createSalt = async (ctx: ParameterizedContext, userId: Types.ObjectId, salt: string) => {
  await ctx.model.Salt.create({
    userId,
    salt
  })
}

const encrypt = async (password: string) => {
  // 生成salt迭代次数
  const saltRounds = 10
  // 生成随机盐
  const salt = await bcrypt.genSalt(saltRounds)
  // 获取hash值
  const hashPassword = await bcrypt.hash(password, salt)
  return {
    hashPassword,
    salt
  }
}

 const encryptWithSalt = (password: string, salt: string) => {
  return bcrypt.hashSync(password, salt);
}


export default {
  getUsers,
  createUser,
  encryptWithSalt
}