import koa from 'koa';
import * as koaBody from 'koa-body'
import router from './router'
import { service } from './service'
import { DataModel } from './modules'
import configDefault from './config/config.default'
import mongodb from 'mongoose'
import { jwtVertify } from './middleware/jwt'

declare module 'koa' {
  interface DefaultContext {
    service: typeof service;
    model: typeof DataModel;
    config: typeof configDefault
  }
}

const app = new koa()

// service挂载到ctx下，避免在每个controller文件中引入service
app.context.service = service
app.context.model = DataModel
app.context.config = configDefault

app.use(koaBody())
app.use(jwtVertify)
app.use(router.routes())

app.listen(7001)

// connect mongo
mongodb.connect(configDefault.mongodbUrl, configDefault.mongoOptions, (error) => {
  if (error) {
    console.log(error)
  }
})


console.log('start server')