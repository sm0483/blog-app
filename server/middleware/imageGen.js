const asyncWrapper = require("../error/asyncWrapper");

const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');
const fileUpload = require('express-fileupload');
const cloudConfig=require("../config/cloudinay");
const cloudinay=require('cloudinary');
const CustomError = require("../error/custom");


const imageGen=asyncWrapper(async(req,res,next)=>{
    try {
        const file=req.files.image;
        const result=await cloudinay.uploader.upload(file.tempFilePath,{
            public_id:`${Date.now()}`,
            resource_type:"auto",
            folder:"images"
        });
        const data={
            ...req.body,
            imageUrl:result.url
        }
        req.body=data;

        return next();
        
    } catch (error) {
        throw new CustomError("image upload failed",StatusCodes.BAD_GATEWAY);
        
    }
 

})


module.exports=imageGen;