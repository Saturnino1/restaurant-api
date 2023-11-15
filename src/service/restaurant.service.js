const Restaurant = require('../Models/restau.model')
const Plate = require('../Models/plate.model')
const Drink = require('../Models/drink.model')
const plateModel = require('../Models/plate.model')


const listRestaurantAll = async () => {

    return await Restaurant.find()

}



const listRestaurantById = async (id) => {

    return await Restaurant.findById(id)

}

const listRestaurantByIdProduct = async (restaurantId) =>{



    const plates = await  listRestaurantByIdPlates(restaurantId)

    const drinks = await listRestaurantByIdDrinks(restaurantId)

    if(!drinks && plates){
        return await {plates: plates}
    }
    if(drinks && !plates){
        return await {drinks: drinks}
    }

    return await [{plates: plates},{drinks: drinks}]

    // return ({response: "No data found!"})    
}


const listRestaurantByIdDrinks = async (restaurantId)=>{
    return await Drink.find({restaurantId: restaurantId})
    
}

const listRestaurantByIdPlates = async (restaurantId)=>{
    return await plateModel.find({restaurantId: restaurantId})
    
}




const updateRestaurantById = async (id, restaurantId) => {

    return await Restaurant.findByIdAndUpdate(id, restaurantId)
        .then(() => {
            return ({ respnse: "updated successfully :)" })
        })
        .catch(() => {
            return ({ respnse: "Failled on save :(" })
        })

}




const deleteRestaurantById = async (ID) => {

    await Restaurant.findByIdAndRemove(ID)
    .then(() => {
        return ({ response: `Restaurant with id << ${req.params.id} >> delected successfullly! ` })
    })
    .catch(() => {
        return ({ respnse: "Failled while trying to delete restaurant :(" })
    })

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