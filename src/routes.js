import { Router } from "express";

import auth from './middlewares/auth'

import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';
import WatersController from "./controllers/WatersController";
import MacrosController from "./controllers/MacrosController";
import FoodsController from "./controllers/FoodsController";

const routes = new Router();

// puclic routes
routes.post('/sessions', SessionsController.create);
routes.post('/users', UsersController.create);

// middleware
routes.use(auth);

// private routes
// USERS
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);

routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

// INFOS
//WATER
routes.get('/users/:user_id/water', WatersController.index);
routes.post('/users/:user_id/water', WatersController.create);
routes.put('/users/:user_id/water/:id', WatersController.update);

//MACRO
routes.get('/users/:user_id/macro', MacrosController.index);
routes.post('/users/:user_id/macro', MacrosController.create);
routes.put('/users/:user_id/macro/:id', MacrosController.update);

// FOOD
routes.get('/food', FoodsController.index);
routes.get('/food/:id', FoodsController.show);
routes.post('/food', FoodsController.create);
routes.put('/food/:id', FoodsController.update);
routes.delete('/food/:id', FoodsController.destroy);

export default routes;