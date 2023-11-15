const mongoose = require('mongoose')

const platesShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
        type: String,
            required: true,
        },
        ingredients: [String],
        img_url: {
            type: String,
            default: "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        },
        restaurantId:{
            type: String,
            required: true,
        },
        createdDate: {
            type: Date,
            default: Date.now,
        },
    });

module.exports = mongoose.model('plates', platesShema)