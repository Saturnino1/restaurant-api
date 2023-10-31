const Route = require('express').Router()
const UserController = require('../controllers/user.controller')


    /*********************  GET  ***********************/
    Route.get('/',(_,res) => res.send({response: "get requested"}) )

    Route.get('/user',(_,res) => UserController.listUsersAll(res))

    Route.get('/user/admin',(_,res) => UserController.listUsersAdmin(res))
   
    Route.get('/user/client',(_,res) => UserController.listUsersClient(res))
    
    Route.get('/user/:id',(req,res) => UserController.listUserById(req,res))
    
    Route.get('/user/reset-password/:id/:token',(req,res) => UserController.resetPassword(req,res))
    



    /*********************  POST  ***********************/
    Route.post('/user/create',(req,res) => UserController.insertUser(req,res))

        //- - - - - - > Log in < - - - - - - 
        Route.post('/login',(req,res) => UserController.login(req,res) )
        //- - - - - - > RECOVER PASSWORD < - - - - - - 
        Route.post('/login/recover-password',(req,res) => UserController.recoverPassword(req,res) )
        // Route.post('/login/recover-password',(req,res) => UserController.recoverPassword(req,res) )




    /*********************  DELETE  ***********************/
    Route.delete('/user/delete/:id', (req,res) => UserController.deleteUserById(req,res))
    



    /*********************  PUT  ***********************/
    Route.put('/user/update/:id', (req,res)=> UserController.updateUserById(req,res))


module.exports = Route

