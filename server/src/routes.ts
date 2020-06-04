import express, { request, response } from 'express'

import PointsController from './controllers/PointsController.ts'
import ItemsController from './controllers/ItemsController.ts'

//index(listar vários), show(mostrar especifico), create, update, delete

const pointsController = new PointsController();
const itemsController = new ItemsController();
const routes = express.Router();

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes