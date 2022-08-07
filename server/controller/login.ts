import { ILogin } from "dto/login";
import { ParameterizedContext } from "koa";
import * as jwt from 'jsonwebtoken'

const login = async (ctx: ParameterizedContext) => {
  const loginData: ILogin = ctx.request.body
  const checkRes = ctx.service.login.checkLoginData(loginData)
  if (!checkRes) {
    ctx.status = 400
    return
  }
  try {
    const loginRes = await ctx.service.login.login(ctx)
    if (loginRes) {
      // ctx.cookies.set('session_id', loginRes._id.toString());
      // 签发token
      //const token = jsonwebtoken.sign({_id, name}, secret, {expiresIn: `1d`});//有效时间1d
      const token = jwt.sign(
        {
          userId: loginRes.userId
        },
        ctx.config.jwt.privateKey,
        ctx.config.jwt.options
      )
      ctx.body = token;
      ctx.status = 200
    } else {
      ctx.body = '用户登录失败';
      ctx.status = 401
    }
  } catch (error) {
    ctx.body = '用户登录出错'
    ctx.status = 500
  }
}

export default {
  login
}