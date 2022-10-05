import express from 'express'
import path from 'path'
import Configuration from './configurations/Configuration.js'
import Middleware from './middlewares/Middlewares.js'
import AliveRoutes from './routes/AliveRoutes.js'
import TodoRoutes from './routes/TodoRoutes.js'
import Logger from './utils/Logger.js'

const app = express()
Middleware.applyMiddlewares(app)

AliveRoutes(app)
TodoRoutes(app)

app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'static/index.html'))
})

Middleware.errorHandlerAndNotFound(app)
Configuration.connectToPort(app)
Configuration.connectToDatabase().then(() => {
    Logger.debug('--== lolz ==--')
})

export default app
