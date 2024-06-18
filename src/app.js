import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from '../routes/user.Routes.js';
import productRoutes from '../routes/product.Routes.js';
import mongoose from "mongoose";
import envConfig from "../src/config/env.config.js";

const app = express();

// Se requiere para leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// ========== OTROS ==========
app.use(cors());
app.use(bodyParser.json());

// ==================== ROUTES =====================
app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);


// ---- SERVER -----
const PORT = process.env.PORT || 8080


// ============================ CONECCTION DATA BASE =====================

// Conexión a la base Mongo con inicialización de la app
mongoose.
connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connect to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
});