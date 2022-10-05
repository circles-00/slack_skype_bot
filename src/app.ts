import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { BaseError } from './errors/BaseError'
import slackRoutes from './routes/slack.routes'
import { Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(express.json())

app.use(cors())
app.use(bodyParser.json())

app.use('/slack-notifications', slackRoutes)

app.use(
  (error: unknown, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof BaseError) {
      return response.status(error.httpCode || 500).send(error.message)
    }
    // TODO: Implement logger and replace this
    console.log('Unknown error! Kill the application', error)
  },
)

export default app
