const asyncWrapper = require("../error/asyncWrapper");

const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');
const CustomError = require("../error/custom");
const uploadFile = require("../utils/cloudinary");


const imageGen=asyncWrapper(async(req,res,next)=>{
    try {
        const data=await uploadFile(req);
        req.body=data;
        return next();
    } catch (error) {
        throw new CustomError("image upload failed",StatusCodes.BAD_GATEWAY);
    }
 
})


module.exports=imageGen;