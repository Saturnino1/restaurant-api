const mongoose = require('mongoose')

const Pedido = mongoose.Schema({

    id_user: {
        type: String,
        required: true
    },

    status: {
        type: String, enum: ['pending', 'confirmed', 'cancellpetooried']
    },

    total_amount: {
        type: Number,
        required:true
    },

    order_date: {
        type: Date,
        default: Date.now
    },
    
    ids_item:[{
        type: Object,
    }]
})



module.exports = mongoose.model('Order',Pedido)