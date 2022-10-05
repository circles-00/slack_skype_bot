import { Router } from 'express'
import { SlackNotificationsController } from '../controllers'

const router = Router()

router.post('/', (...args) => SlackNotificationsController.get().receiveChannelMessages(...args))

export default router
