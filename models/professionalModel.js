// Datos del profesional que brinda el servicio

const mongoose = require('mongoose');

const professionalSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "PLease enter your name"]
        },
        contact: {
            adreess: {
                type: String,
                require: true,
                city: {
                    type: String,
                    require: true,
                    phone: {
                        type: Number,
                        require: true,
                    },
                    image: {
                        type: String,
                        require: false,
                    },
                    email: {
                        type: String,
                        require: true,
                    },
                    password: {
                        type: String,
                        require: true,
                    }
                }
            }
        },
    {
        timestamps: true
    }
 })

const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;