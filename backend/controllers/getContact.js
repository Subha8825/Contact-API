const contactModel = require("../models/contactModel")

exports.getAllContact=async(req,res,next)=>{
    try{
        const contact=await contactModel.find()
        res.json(contact)
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}

exports.getContactById=async(req,res,next)=>{
    try{
        const contact=await contactModel.findById(req.params.id)
        if(!contact){
            return res.status(404).json({
                message:"Contact Not Found"
            })
        }
        return res.status(200).json(contact)
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"

        })
    }

}