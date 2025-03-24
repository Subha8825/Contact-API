const contactModel = require("../models/contactModel");

exports.addContact=async(req,res,next)=>{
    try{
        const{username,phonenumber,email}=req.body;
        const user=await contactModel.findOne({email})
        if(user){
            return res.status(404).json({
                message:"Allready the contact Exists"
            })
        }
        const newUser=new contactModel({username,phonenumber,email})
        await newUser.save();
        res.status(200).json({
            message:"Contact Added Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}