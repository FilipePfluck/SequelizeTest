import express from 'express'
import AddressesController from './controllers/AddressesController'
const TechsController =  require('./controllers/TechController')
import UsersController from './controllers/UserController'

const userController = new UsersController()
const addressesController = new AddressesController()
const techsController = new TechsController()

const routes = express.Router()

routes.post('/users',userController.create)
routes.get('/users', userController.index)

routes.post('/users/:user_id/addresses', addressesController.create)
routes.get('/users/:user_id/addresses', addressesController.index)

routes.get('/users/:user_id/techs', techsController.index)
routes.post('/users/:user_id/techs', techsController.create)
routes.delete('/users/:user_id/techs', techsController.delete)

export default routes