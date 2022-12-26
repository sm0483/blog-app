const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');

const pageNotFound=(req,res,next)=>{
    res.status(StatusCodes.NOT_FOUND).json({
        "error":getReasonPhrase(StatusCodes.NOT_FOUND),
        "statusCode":StatusCodes.NOT_FOUND
    })
}

module.exports=pageNotFound;

