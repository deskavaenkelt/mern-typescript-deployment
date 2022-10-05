import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Logger from '../utils/Logger.js'

dotenv.config()

const env = process.env.NODE_ENV
let PORT
let uri = ''

if (env === 'development') {
    uri = process.env.MONGODB_URL + process.env.MONGODB_DB_NAME
    PORT = Number(process.env.SERVER_PORT)
} else {
    uri = process.env.MONGODB_URI
    PORT = 8080
}


const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri)
        Logger.info('Successfully connected to the Database')
    } catch (error) {
        Logger.error('Error while connecting to Database'.toUpperCase(), error)
        process.exit()
    }
}

const connectToPort = (app) => {
    app.listen(PORT, () => {
        Logger.info(`⚡️[server]: Server is running at http://localhost:${ PORT }`)
        if (env === 'development') {
            Logger.warn('Server running in development mode!'.toUpperCase())
        } else {
            Logger.info('Server running in production mode!'.toUpperCase())
        }
    })
}

export default {
    connectToPort,
    connectToDatabase
}
