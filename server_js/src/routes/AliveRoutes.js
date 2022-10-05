import Logger from '../utils/Logger.js'
import StatusCode from '../utils/StatusCode.js'


const AliveRoutes = (app) => {
    app.get('/alive', (req, res) => {
        Logger.http('AliveRoutes::GET /')
        res.status(StatusCode.OK).send('API is Alive!')
    })
}

export default AliveRoutes
