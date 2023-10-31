
const User = require('../Models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


 const listUsersAll = async(res) => {
   
    const user = await User.find()

        res.send( user )

    // res.send({response: "Operation < LIST ALL USERS > out of service.... try later"})
}


const listUsersAdmin = async (res) =>{

    const user = await User.find({access:1})
    res.send(user)
    
    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}


const listUsersClient = async (res) =>{

    const user = await User.find({access:2})
    res.send(user)
    
    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}



const listUserById = async (req,res) =>{

    const user = await User.findById(req.params.id)
    res.send(user)
    
    // res.send({response: "Operation < LIST SPECIFIQUE USER > out of service.... try later"})
}




const updateUserById = async (req,res) =>{
    const {name,email , password , birth_day, avatar_url,access } = req.body
    
    let cryptedPass = null
    if(password){
        cryptedPass = await hashPass(password)
    }
    const user = {
        name: name,
        email: email,
        password: cryptedPass,
        birth_day: birth_day,
        avatar_url: avatar_url,
        access: access
    }
        //  findByIdAndUpdate
    await User.findByIdAndUpdate(req.params.id, user)
    .then(()=>{
        res.send({respnse: "updated successfully :)"})
    })
    .catch(()=>{
        res.send({respnse: "Failled on save :("})
    })
    
    // res.send({response: "Operation < UPDATE USER > out of service.... try later"})
}







const deleteUserById = async (req,res) =>{

    await User.findByIdAndRemove(req.params.id)

    res.send({response: `User with id << ${req.params.id} >> delected successfullly! `})

    // res.send({response: "Operation < DELETE USER > out of service.... try later"})
}



/*********************  Cryptograph pass ********************************* */

const hashPass = async (pass) =>{
    
    try {
        const cryptedPass = await bcrypt.hash(pass,10 ) //,(err,succes)=>{
            return cryptedPass    
        } catch (error) {
            console.log("Error!");
            return "no Hash"
        }
        
}
    
    /*********************  INSERT NEW USER ********************************* */
const insertUser = async (req,res) =>{
    const {name,email , password , birth_day, avatar_url,access } = req.body

    const dataFound = await User.findOne({email: email})
    if(dataFound){

        res.send({response: "Email already exists"})
        return
    }

    const cryptedPass = await hashPass(password);
    // console.log("Out of ", newPass);

    
    const user = new User({
        name: name,
        email: email,
        password: cryptedPass,
        birth_day: birth_day,
        avatar_url: avatar_url,
        access: access
    })

    user.save()
    .then(()=>{
        res.status(200).send({response: `User ${name} added successfully! :)`})
    })
    .catch(()=>{
        res.status(404).send({response:"Fail on send user to the db"})
    })

    // res.send({response: "Operation < INSERT USER > out of service.... try later"})

}
/** --------------------------------------------------------------------- */




const login = async (req,res) =>{
    const {email , password } = req.body
    if(req.body){         
        dataFound = await User.findOne({email: email})
        
        if (!dataFound) {
            res.send({response: "authentication fail"})
            return
        }
        
        bcrypt.compare(password,dataFound.password ,(err,succes) => {
            if (err) {
                console.log(err);
            }
            if (succes) {
                // ---->       >>> Create a Token and send <<<
                res.send({FakeToken:"gfaWdw3dsssaaaasdaavHGcffx3rssOzvdfOfdfRxxcdcszc",response: "Be Welcome :) "})
            }else{
                res.send({response: "authentication fail"})  /// PASSWORD incorrect
            }
        })
        
    }else{
        res.send({response: "Check if you sent email and password"})
    }


    // res.send({response: "Operation < LOG IN > out of service.... try later"})
}

const recoverPassword = async (req,res) =>{
    // const {email} = req.body.email
    // res.send({response: "Recover required by "+req.body.email })
    const user = await User.findOne({email: req.body.email})
    .then((item)=>{
        const payload = {
            name: item.name,
            email: item.email
        }
        const token = jwt.sign(payload, process.env.RECOVER_KEY ,{expiresIn: "1h"})
        // const reset_url = 
        res.send({recoverPass_link: `http://127.0.0.1:5000/user/reset-password/${item._id}/${token}` })
        // res.status(403).send([{token:token},item])
    })
    .catch(()=>{
        res.status(403).send({response: "Failled"})
    })
    // res.send({response: "Operation < RECOVER PASSWORD > out of service.... try later"})
}
module.exports = {
    listUsersAll,
    listUsersAdmin,
    listUsersClient,
    listUserById,
    updateUserById,
    deleteUserById,
    insertUser,

    login,
    recoverPassword
}