const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    buyPrice: {
        type: Number,
        required: true,
        min: 0
    },

    sellPrice: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model("Product", productSchema);
