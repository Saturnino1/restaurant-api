const drink_control = require('../controllers/drink_controll')
const route = require('express').Router()


//************************List**************************** */
route.get('/drinks', (_,res) => drink_control.listDrinks(res))


//************************GetById************************* */
route.get('/drink/:id', (req,res) => drink_control.listDrinkById(req,res))


//************************Create************************** */
route.post('/drink/create' ,(req,res) => drink_control.createDrink(req,res))


//************************Delete*************************** */
route.delete('/drink/delete/:id', (req,res) => drink_control.deleteDrinkById(req,res))
//route.get('/drinks/:id', async(req,res) =>{


//************************Update*************************** */
route.put('/drink/upate/:id', (req,res) => drink_control.updateDrink(req,res))


module.exports = route