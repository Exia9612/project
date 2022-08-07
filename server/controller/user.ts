import { IUser } from "dto/user";
import { ParameterizedContext } from "koa";

const getUesrs= async (ctx: ParameterizedContext) => {
  ctx.body = await ctx.service.user.getUsers(ctx)
  ctx.status = 200
}

const createUser = async (ctx: ParameterizedContext) => {
  const userData: IUser = ctx.request.body
  if (!userData.username || !userData.password) {
    ctx.status = 400
    return
  }

  ctx.body = await ctx.service.user.createUser(ctx)
  ctx.status = 200
}

export default {
  getUesrs,
  createUser
}