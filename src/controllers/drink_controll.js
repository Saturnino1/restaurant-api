const Drink = require('../models/Drink')
const drink_service = require('../service/drinkService')




//**************************List*************************** */

exports.listDrinks = async(res) =>{
   
    const drink = await Drink.find()
    //res.send({response: "Listar..."})
    res.send(drink)
     
}




//*************************ListById************************ */

exports.listDrinkById = async(req,res) =>{
   
    const drink = await Drink.findById(req.params.id)

//    res.send({response: req.params.id})
     res.send(drink)

}




//**************************Delete************************* */

exports.deleteDrinkById = async(req,res) =>{

    await Drink.findByIdAndRemove(req.params.id)
    res.send({Response:"deletedo"})
}




//**************************Creat************************** */

exports.createDrink = (req,res) => drink_service.createDrink(req,res) 




//**************************Update************************* */

exports.updateDrink = (req,res) => drink_service.updateDrink(req,res)