import express from 'express';
import userController from '../controllers/userController.js';

const routes = express.Router();

const {getUser, getUserByID, postUser, putUser, deleteUser} = userController;

routes.get('/users', getUser);
routes.get('/user/:id', getUserByID);
routes.post('/user/register', postUser);
routes.put('/user/update/:id', putUser);
routes.delete('/user/delete/:id', deleteUser)

export default routes;