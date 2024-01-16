import express from 'express'
import mongoose from 'mongoose'
import Product from './services/dao/mongo/models/productModel.js'
import configEnv from './config/env.config.js'
import './config/db.js'

const app = express()

// Se requiere para leer el body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ==================== ROUTES =====================

// GET PRODUCTS
app.get('/product', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// GET PRODUCTS BY ID
app.get('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        // we cannot find any product in database
        if (!product) {
            return res
                .status(404)
                .json({ message: `cannot find any product by with ID ${id}` })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// POST PRODUCTS
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

// UPDATE PRODUCTS BY ID
app.put('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        // we cannot find any product in database
        if (!product) {
            return res
                .status(404)
                .json({ message: `cannot find any product by with ID ${id}` })
        }
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// DELETE PRODUCTS BY ID
app.delete('/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res
                .status(404)
                .json({ message: `cannot find any product with ID ${id}` })
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// ============================ CONECCTION DATA BASE =====================

// Conexión a la base Mongo con inicialización de la app
/*mongoose.
connect('mongodb+srv://api_user:SLC2eKSsw3Z90azH@apirest.rkcheo3.mongodb.net/APIRest_NONPROD?retryWrites=true&w=majority')
.then(() => {
    console.log('Connect to MongoDB')
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
});
*/

// ---- SERVER -----
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
