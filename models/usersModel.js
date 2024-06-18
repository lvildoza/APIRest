// Datos del usuario

import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
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
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;