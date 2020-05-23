import Router from 'koa-router'

import UsersController from '../controllers/usersController'

const router = new Router()

router.post('/users/signup', UsersController.create)
router.get('/users/:id', UsersController.show)

export default router.routes()
