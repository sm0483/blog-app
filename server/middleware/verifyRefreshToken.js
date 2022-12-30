const asyncWrapper = require("../error/asyncWrapper");

const {
    StatusCodes,
    getReasonPhrase
}=require('http-status-codes');
const CustomError = require("../error/custom");
const { tokenValid } = require("../utils/jwt");

const verifyRefreshToken=asyncWrapper(async(req,res,next)=>{
    const token = req.signedCookies.refreshToken;
    if(!token)throw new CustomError("token not present",StatusCodes.UNAUTHORIZED);
     try {
        const tokenResponse=tokenValid(token,"refreshToken");
        req.user={
            id:tokenResponse.payload.id
        }
        req.body={
            id:tokenResponse.payload.id
        }
        return next();
    } catch (error) {
        throw new CustomError(error.message,StatusCodes.FORBIDDEN)
    }
})


module.exports=verifyRefreshToken;