const Restaurant = require('../Models/restau.model')
const Plate = require('../Models/plate.model')
const Drink = require('../Models/drink.model')
const RestaurantService = require('../service/restaurant.service')


const listRestaurantAll = async (res) => {

    try {
        const restau = await RestaurantService.listRestaurantAll()    
        res.status(200).send(restau)
    } catch (error) {
        res.status(404).send({response: error.message })
        
    }

    // res.send({response: "Operation < LIST ALL USERS > out of service.... try later"})
}



const listRestaurantById = async (req, res) => {
    try {
        const restau = await RestaurantService.listRestaurantById(req.params.id)
        res.status(200).send(restau)
    } catch (error) {
        res.status(404).send({sms: "Error while bring data[restauraant unique] from database!",response: error.message })
    }

    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}

const listRestaurantByIdProduct = async (req,res) =>{

    try{
        const products = await RestaurantService.listRestaurantByIdProduct(req.params.id)
        res.send(products)
    }catch (error) {
        res.status(404).send({response: "Error while bring data [product from restaurant] from database!",errorMessage: error.message })
    }

    
    // res.send({response: "No data found!"})    
}


const listRestaurantByIdDrinks = async (req,res)=>{
    try{
        const drinks = await RestaurantService.listRestaurantByIdDrinks( req.params.id )
            res.send(drinks)   
    }catch (error) {
        res.status(404).send({response: "Error while bring data[drinks from restaurant] from database!",errorMessage: error.message })
    }
}

const listRestaurantByIdPlates = async (req,res)=>{
    try{
        const plates = await RestaurantService.listRestaurantByIdPlates( req.params.id )
            res.status(200).send(plates)   
    }catch (error) {
        res.status(404).send({response: "Error while bring data [plates] from database!",errorMessage: error.message })
    }

}




const updateRestaurantById = async (req, res) => {

    try{
        const resp = await RestaurantService.updateRestaurantById(req.params.id,req.body)
        res.send(resp)
    }catch (error) {
        res.status(404).send({response: "Error while update data [Restaurant] from database!",errorMessage: error.message })
    }

    // res.send({response: "Operation < UPDATE USER > out of service.... try later"})
}




const deleteRestaurantById = async (req, res) => {
    try{
        const resp = await RestaurantService.deleteRestaurantById(req.params.id)
        res.status(200).send(resp)
    }catch (error) {
        res.status(404).send({response: "Error while remove data [restaurant] from database!",errorMessage: error.message })
    }

    // res.send({response: "Operation < DELETE USER > out of service.... try later"})
}



/*********************  INSERT NEW USER ********************************* */

const insertRestaurant = async (req, res) => {
    const {name, email , sede , avatar_url } = req.body
    const restau = new Restaurant({
        name: name,
        email: email,
        sede: sede,
        avatar_url: avatar_url
    })
    restau.save()
        .then(() => {
            res.status(200).send({ response: `Restaurant ${name} added successfully! :)` })
        })
        .catch(() => {
            res.status(404).send({ response: "Fail on send RESTAURANT to the db" })
        })

    // res.send({response: "Operation < INSERT USER > out of service.... try later"})

    
}
/** --------------------------------------------------------------------- */


module.exports = {
    listRestaurantAll,
    listRestaurantById,
    listRestaurantByIdProduct,
    listRestaurantByIdPlates,
    listRestaurantByIdDrinks,

    updateRestaurantById,
    deleteRestaurantById,
    insertRestaurant
}