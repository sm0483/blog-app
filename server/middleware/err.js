const CustomError=require('../error/custom');

const errorHandler=(err,req,res,next)=>{
    console.log("from error handler: "+err);
    const {message,status}=err;
    return res.status(status).json({
        "error":message,
        "status":status
    });
}

module.exports=errorHandler;