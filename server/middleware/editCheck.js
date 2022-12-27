const asyncWrapper = require("../error/asyncWrapper");

const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');
const CustomError = require("../error/custom");
const uploadFile = require("../utils/cloudinary");


const editCheck=asyncWrapper(async(req,res,next)=>{
    try {
        let data=null;
        if(req.files){
            data=await uploadFile(req);
            req.body=data;
        } else{
            delete req.body.image
        }
        return next();
    } catch (error) {
        throw new CustomError(error.message,StatusCodes.BAD_GATEWAY);
    }
 
})


module.exports=editCheck;