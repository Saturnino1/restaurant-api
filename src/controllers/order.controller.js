const orderService= require('../service/order.service')

const listOrderAll = async (res) => {

    try{
        var orders=await orderService.listOrderAll()
        return res.status(200).json({ status: 200, data: orders, message: 'Succesfully Orders Retrieved'});
    } catch(e) {
        return res.status(400).json({ status: 400, data:orders, message: e.message});
    }

    // res.send({response: "Operation < LIST ALL USERS > out of service.... try later"})
}



const listOrderById = async (req, res) => {

    try{
        var order=await orderService.listOrderById(req.params.id)
        return res.status(200).json({ status: 200, data: order, message: 'Succesfully Order Retrieved'});
    } catch(e) {
        return res.status(400).json({ status: 400, data:order, message: e.message});
    }

    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}




const updateOrderById = async (req, res) => {
    try{
        var order=await orderService.updateOrderById(req.params.id, req.body)
        return res.status(200).json({ status: 200, data: order, message: 'Succesfully Orders Updated'});
    } catch(e) {
        return res.status(400).json({ status: 400, data:order, message: e.message});
    }

    // res.send({response: "Operation < UPDATE USER > out of service.... try later"})
}




const deleteOrderById = async (req, res) => {

    try{
        var order=await orderService.deleteOrderById(req.params.id)
        return res.status(200).json({ status: 200, data: order, message: 'Order Deleted Sucessfully'});
    } catch(e) {
        return res.status(400).json({ status: 400, data:order, message: e.message});
    }

    // res.send({response: "Operation < DELETE USER > out of service.... try later"})
}



/*********************  INSERT NEW ORDER ********************************* */

const insertOrder = async (req, res) => {

    try{
        var order=await orderService.insertOrder(req.body)
        return res.status(200).json({ status: 200, data: order, message: 'Order Created Succesfully '});
    } catch(e) {
        return res.status(400).json({ status: 400, data:order, message: e.message});
    }


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