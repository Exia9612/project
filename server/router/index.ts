import { DefaultContext, DefaultState } from 'koa'
import * as Router from 'koa-router'
import Controller from '../controller'

const router = new Router<DefaultState, DefaultContext>()

router.get('/', Controller.defaultController.controllerIndex)
// 用户登录注册
router.post('/api/v1/login', Controller.controllerLogin.login)
router.get('/api/v1/users', Controller.controllerUsers.getUesrs)
router.post('/api/v1/users', Controller.controllerUsers.createUser)

export default router