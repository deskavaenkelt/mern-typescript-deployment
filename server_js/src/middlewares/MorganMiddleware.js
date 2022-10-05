import morgan from 'morgan'

import Logger from '../utils/Logger.js'

const stream = {
    write: (message) => Logger.http(message)
}

const skip = () => {
    const env = process.env.NODE_ENV || 'development'
    return env !== 'development'
}

const MorganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms', { stream, skip }
)

export default MorganMiddleware
