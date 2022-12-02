const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("products", products, "products");