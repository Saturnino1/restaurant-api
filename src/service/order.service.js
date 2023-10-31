
const Order = require('../Models/order.model')



const listOrderAll = async () => {

    return await Order.find()

    // res.send({response: "Operation < LIST ALL USERS > out of service.... try later"})
}



const listOrderById = async (id) => {

    return await Order.findById(id)


    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}




const updateOrderById = async (id, data) => {

    return await Order.findByIdAndUpdate(id, data, {new: true})

}




const deleteOrderById = async (id) => {

    return await Order.findByIdAndRemove(id)


    // res.send({response: "Operation < DELETE USER > out of service.... try later"})
}



/*********************  INSERT NEW USER ********************************* */

const insertOrder = async (data) => {
    const order = new Order(data)
    return await order.save()

    // res.send({response: "Operation < INSERT USER > out of service.... try later"})

}
/** --------------------------------------------------------------------- */


module.exports = {
    listOrderAll,
    listOrderById,
    updateOrderById,
    deleteOrderById,
    insertOrder
}