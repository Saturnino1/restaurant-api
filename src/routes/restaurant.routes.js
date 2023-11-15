const Route = require('express').Router()
const RestauController = require('../controllers/restau.controller')


    /*********************  GET  ***********************/
    Route.get('/',(_,res) => res.send({response: "get requested"}) )

    Route.get('/restaurant',(_,res) => RestauController.listRestaurantAll(res))
    
    Route.get('/restaurant/:id',(req,res) => RestauController.listRestaurantById(req,res))
    
    Route.get('/restaurant/:id/product',(req,res) => RestauController.listRestaurantByIdProduct(req,res))
    Route.get('/restaurant/:id/drinks',(req,res) => RestauController.listRestaurantByIdDrinks(req,res))
    Route.get('/restaurant/:id/plates',(req,res) => RestauController.listRestaurantByIdPlates(req,res))



    

    /*********************  POST  ***********************/
    Route.post('/restaurant/create',(req,res) => RestauController.insertRestaurant(req,res))




    /*********************  DELETE  ***********************/
    Route.delete('/restaurant/delete/:id', (req,res) => RestauController.deleteRestaurantById(req,res))
    



    /*********************  PUT  ***********************/
    Route.put('/restaurant/update/:id', (req,res)=> RestauController.updateRestaurantById(req,res))


module.exports = Route

