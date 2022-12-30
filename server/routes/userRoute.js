const express=require('express');
const { registerUser, loginUser, getAccessToken, getUser, logoutUser } = require('../controllers/auth');
const verifyAccessToken = require('../middleware/verifyAcessToken');
const verifyRefreshToken = require('../middleware/verifyRefreshToken');
const router=express.Router();


router.route('/auth/register').post(registerUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/get-accessToken').get(verifyRefreshToken,getAccessToken);
router.route('/').get(verifyAccessToken,getUser);
router.route('/auth/logout').get(logoutUser);



module.exports=router;
