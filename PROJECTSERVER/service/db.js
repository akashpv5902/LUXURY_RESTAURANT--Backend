


// import mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ElServer',{useNewUrlParser:true})

const Customer=mongoose.model('Customer',{
    uname:String,
    pswd:Number,
    email:String
})


const Booker=mongoose.model('Booker',{
    name:String,
    email:String,
    phone:Number,
    date:Number,
    time:Number,
    nop:Number
})


module.exports={
    Customer,
    Booker
}