import { Router } from "express";

import auth from './middlewares/auth'

import UsersController from './controllers/UsersController';
import SessionsController from './controllers/SessionsController';

const routes = new Router();

// puclic routes
routes.post('/sessions', SessionsController.create);

// middleware
routes.use(auth);

// private routes
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


export default routes;