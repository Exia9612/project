import { DefaultContext } from "koa";

const controllerIndex = (ctx: DefaultContext) => {
  ctx.model.User.create({
    userName: 'cheng'
  })
  ctx.body = ctx.service.helloworld.helloworld()
}

export default {
  controllerIndex
}