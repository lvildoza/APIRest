// Servicio que ofrece el profesional, se debe relacionar el servicio con un profesional

const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "PLease enter a service name"]
        },
        price: {
            type: Number,
            require: true,
        },
        image: {
            type: String,
            require: false,
        }
    },
    {
        timestamps: true
    }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;