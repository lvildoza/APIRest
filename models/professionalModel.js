// Datos del profesional que brinda el servicio

const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "PLease enter your name"]
        },
        address: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        phone: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: false,
        },
        active: {
            type: Boolean,
            require: true,
        }
    },
    {
        timestamps: true
    }
);

const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;