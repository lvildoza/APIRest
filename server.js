const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.Routes');
const app = express();

// Se requiere para leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// ========== OTROS ==========
app.use(cors());
app.use(bodyParser.json());

// ==================== ROUTES =====================
app.use('/api/v1', userRoutes.routes);

// ============================ CONECCTION DATA BASE =====================

// Conexión a la base Mongo con inicialización de la app
mongoose.
connect('mongodb+srv://api_user:ilL2vuYDVL6TgMkE@apirest.rkcheo3.mongodb.net/API_Rest_Dev?retryWrites=true&w=majority')
.then(() => {
    console.log('Connect to MongoDB')
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
});