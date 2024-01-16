import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            require: true,
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

const Product = mongoose.model('Product', productSchema);

export default Product;