import dotenv from 'dotenv'
import { Express } from 'express'
import { connect } from 'mongoose'
import Logger from '../utils/Logger'

dotenv.config()

const env: string = process.env.NODE_ENV
let PORT: number = 8080

let uri: string

if (env === 'development') {
	uri = process.env.MONGODB_URL + process.env.MONGODB_DB_NAME
	PORT = Number(process.env.SERVER_PORT)
} else {
	uri = process.env.MONGODB_URI
	PORT = 8080
}


const connectToDatabase = async () => {
	try {
		await connect(uri)
		Logger.info('Successfully connected to the Database')
	} catch (error) {
		Logger.error('Error while connecting to Database'.toUpperCase(), error)
		process.exit()
	}
}

const connectToPort = (app: Express) => {
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
