const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    birth_date:{
        type: String,
        default: "00-00-0000"
    },
    avatar_url:{
        type: String,
        required: false,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftanzolymp.com%2Fimages%2Fdefault-non-user-no-photo-1.jpg&tbnid=r3Ut1fGNm8np5M&vet=12ahUKEwjc4dz_-JOCAxVjrycCHdxeDjYQMygAegQIARBK..i&imgrefurl=https%3A%2F%2Ftanzolymp.com%2F%3Fattachment_id%3D4420&docid=Me5I2HckQwdMFM&w=2200&h=2200&q=user%20no%20picture&ved=2ahUKEwjc4dz_-JOCAxVjrycCHdxeDjYQMygAegQIARBK"
    },
    access: Number
})



module.exports = mongoose.model('users',User)