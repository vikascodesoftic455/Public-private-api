const mongoose = require('mongoose')

const walletSchemacustomer =  mongoose.Schema({
    name:{
        type:String
    },
    money:{
        type:Number
    },
    Phonenumber:{
        type:Number
    }
})

const walletcustomerModel = new mongoose.model('walletcustomerModel',walletSchemacustomer)

module.exports=walletcustomerModel