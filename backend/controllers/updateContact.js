const contactModel = require("../models/contactModel");

exports.updateContact=async(req,res,next)=>{
    try{
        const contact=await contactModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        if(!contact){
            return res.status(404).json({
                message:"Contact Not Found"
            })
        }
        return res.status(200).json({
            message:"Update Sucessfully"  

        })


    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })

    }

}