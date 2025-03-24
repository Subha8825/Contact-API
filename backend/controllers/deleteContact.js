const contactModel = require("../models/contactModel")

exports.deleteContact=async(req,res,next)=>{
    try{
        const deleteContact=await contactModel.findByIdAndDelete(req.params.id)
        if(!deleteContact){
            return res.status(404).json({
                message:"Contact Not Found"
            })
        }
        return res.status(200).json({
            message:"Deleted SuccessFully"
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}