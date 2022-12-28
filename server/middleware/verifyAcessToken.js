const asyncWrapper = require("../error/asyncWrapper");

const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');
const CustomError = require("../error/custom");
const { tokenValid } = require("../utils/jwt");

const verifyAccessToken=asyncWrapper(async(req,res,next)=>{
    let token=req.headers.authorization;
    if(!token)throw new CustomError("token not present",StatusCodes.UNAUTHORIZED);
    token=token.split(' ')[1];
    try {
        const tokenResponse=tokenValid(token,"accessToken");
        console.log(tokenResponse);
        req.user={
            id:tokenResponse.payload.id
        }
        return next();
    } catch (error) {
        throw new CustomError(error.message,StatusCodes.FORBIDDEN)
    }
})


module.exports=verifyAccessToken;