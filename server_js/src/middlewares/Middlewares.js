import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import StatusCode from '../utils/StatusCode.js'
import MorganMiddleware from './MorganMiddleware.js'

dotenv.config()
const env = process.env.NODE_ENV || 'production'
// const ALLOWED_ORIGINS = 'http://localhost:3000'
const ALLOWED_ORIGINS = 'http://188.166.164.224'

// Middlewares
const allowedOrigins = [ALLOWED_ORIGINS]
// const allowedOrigins = ['*']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options = {
    origin: allowedOrigins,
    methods: allowedMethods
}

const access_control = (app) => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", ALLOWED_ORIGINS); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}

const applyMiddlewares = (app) => {
    access_control(app)
    app.use(cors(options))
    app.use(helmet())
    app.use(MorganMiddleware)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    if (env === 'production') {
        app.use(express.static('static'))
    }
}

// Own made middlewares
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${ req.originalUrl }`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const errorHandler = (error, req, res) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode,
        message: error.message,
        stackTrace: env === 'development' ? error.stack : 'lol'
    })
}

const errorHandlerAndNotFound = (app) => {
    app.use(notFound)
    app.use(errorHandler)
}


export default {
    applyMiddlewares,
    errorHandlerAndNotFound
}
