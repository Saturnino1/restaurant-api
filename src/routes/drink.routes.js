const drink_control = require('../controllers/drink.controller')
const route = require('express').Router()


//************************List**************************** */
route.get('/drinks', (_,res) => drink_control.listDrinks(res))


//************************GetById************************* */
route.get('/drinks/:id', (req,res) => drink_control.listDrinkById(req,res))


//************************Create************************** */
route.post('/drinks/create' ,(req,res) => drink_control.createDrink(req,res))


//************************Delete*************************** */
route.delete('/drinks/delete/:id', (req,res) => drink_control.deleteDrinkById(req,res))
//route.get('/drinks/:id', async(req,res) =>{


//************************Update*************************** */
route.put('/drinks/update/:id', (req,res) => drink_control.updateDrink(req,res))


module.exports = route