import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import { connect } from './utils/db'

export const start = async () => {
  try {
    const app = express()

    app.disable('x-powered-by')

    app.use(cors())
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use(morgan('dev'))

    app.get('/ping', (req, res) => {
      res.send('pong')
    })

    await connect('foo')

    return new Promise(resolve => {
      const server = app.listen(config.port, () => {
        console.log(`Server running at: http://localhost:${config.port}/`)
      })

      resolve(server)
    })
  } catch (error) {
    console.error(error)
    return undefined
  }
}
