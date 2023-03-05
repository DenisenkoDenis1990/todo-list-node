import express from 'express'
import * as questionController from './controller'

export const router = express.Router()

router.get('/:id', questionController.test)
