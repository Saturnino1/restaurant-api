const mongoose = require('mongoose');

const Drink = mongoose.model('drinks',{
    name: String,
    category:String,
    description: String,
    price: Number,
    restaurantId: String,
    calorie: String,
    img_url: String
})

module.exports = Drink