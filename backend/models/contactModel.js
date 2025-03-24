const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    username:String,
    phonenumber:String,
    email:String
})

const contactModel=mongoose.model('contact',contactSchema)

module.exports=contactModel;

