const Route = require('express').Router()
const OrderController = require('../controllers/order.controller')


    /*********************  GET  ***********************/
    Route.get('/',(_,res) => res.send({response: "get requested"}) )

    Route.get('/orders',(_,res) => OrderController.listOrderAll(res))
    
    Route.get('/order/:id',(req,res) => OrderController.listOrderById(req,res))
    



    /*********************  POST  ***********************/
    Route.post('/order/create',(req,res) => OrderController.insertOrder(req,res))




    /*********************  DELETE  ***********************/
    Route.delete('/order/delete/:id', (req,res) => OrderController.deleteOrderById(req,res))
    



    /*********************  PUT  ***********************/
    Route.put('/order/update/:id', (req,res)=> OrderController.updateOrderById(req,res))


module.exports = Route