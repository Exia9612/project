import { Middleware, Next, ParameterizedContext } from "koa";
import jwt from 'jsonwebtoken'
import unless from 'koa-unless'

const checkExceptedUrl = (ctx: ParameterizedContext) => {
  const url = ctx.request.url
  if (ctx.config.jwt.ignoreUrl.includes) return true
  return false
}

export const jwtVertify = async (ctx: ParameterizedContext, next: Next) => {
  if (!checkExceptedUrl(ctx)) {
    const { authorization = '' } = ctx.request.header;
    console.log(ctx.request)
    const token = authorization.replace("Bearer ",'');//token默认有一个Bearer头
    console.log('-----jwt mid------')
    console.log(token)
    try {
      const user = jwt.verify(token, ctx.config.jwt.privateKey);
      ctx.state.user = user;  //约定
    }catch (err){
      ctx.throw(401, err.message);//401验证不符合    
    }
  }
  await next();
}