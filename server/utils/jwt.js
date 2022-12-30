const jwt=require('jsonwebtoken');

const createJwt=(payload,type)=>{
    let token=null
    if(type==="accessToken") token=jwt.sign({payload},process.env.ACCESS_TOKEN,{
        expiresIn: process.env.ACCESS_LIFETIME,

    });
    if(type==="refreshToken") token=jwt.sign({payload},process.env.REFRESH_TOKEN,{
        expiresIn: process.env.REFRESH_LIFETIME,
    });
    return token;
}


const tokenValid=(token,type)=>{
    let isValid=false;
    if(type==="accessToken") isValid=jwt.verify(token,process.env.ACCESS_TOKEN);
    if(type==="refreshToken") isValid=jwt.verify(token,process.env.REFRESH_TOKEN);
    return isValid;
}


const attachCookieToResponse = ( res, payload ) => {
    const token = createJwt(payload,"refreshToken");
    res.cookie("refreshToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      secure: true,
      signed: true,
    });
};

module.exports={
    createJwt,
    attachCookieToResponse,
    tokenValid
}