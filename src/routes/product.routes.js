const Route = require('express').Router()
const Drink = require('../Models/drink.model')
const Plate = require('../Models/plate.model')

Route.get('/product',async (_,res)=>{
    try {
        const plates = await Plate.find()
        const drinks = await Drink.find()

            res.send([plates,drinks])
            // res.send([plates,drinks])
       
        
    } catch (error) {
        res.send({success: false, erroMessage: error.message })
    }
})

module.exports = Route

