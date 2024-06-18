import express from 'express';
import productController from '../controllers/productController.js';

const routes = express.Router();

const {getProduct, getProductByID, postProduct, putProduct, deleteProduct} = productController;

routes.get('/products', getProduct);
routes.get('/product/:id', getProductByID);
routes.post('/product/register', postProduct);
routes.put('/product/update/:id', putProduct);
routes.delete('/product/delete/:id', deleteProduct)

export default routes;
