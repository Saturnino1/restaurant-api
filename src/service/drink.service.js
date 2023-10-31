
const Drink = require('../Models/drink.model')



//**********************Creat***************************** */

exports.createDrink =  async(req,res) =>{
    
    const drink = new Drink({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        restaurantId: req.body.resrestaurantId,
        calorie: req.body.calorie,
        drink_img: req.body.drink_img
    })
    drink.save()
    .then(()=> {
         res.send({response: "Drink << "+req.body.name+" >> inserted successfull !"})
    })
    .catch(()=> {
        res.send({response: "Failed insert !"})
   })

}




//************************List*************************** */
exports.getAllDrinks = async() =>{
    return await Drink.find()
}




//************************GetById************************ */
exports.getDrinkById = async (Id) =>{
    return await Drink.findById(Id)
}




//************************Delete************************** */

exports.deleteDrinkById = async(Id) =>{
    return await Drink.findByIdAndDelete(Id)
}




//***********************Update*************************** */

exports.updateDrink = async(req,res) =>{
    const drink = await Drink.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        restaurantId: req.body.resrestaurantId,
        calorie: req.body.calorie,
        drink_img: req.body.drink_img
    },
    )
    drink.save()
    .then(()=> {
         res.send({response: "Drink << "+req.body.name+" >> updated successfull !"})
    })
    .catch(()=> {
        res.send({response: "Failed update !"})
   })
}
