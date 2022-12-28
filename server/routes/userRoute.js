const express=require('express');
const { registerUser, loginUser, getAccessToken } = require('../controllers/auth');
const router=express.Router();


router.route('/auth/register').post(registerUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/get-accessToken').get(getAccessToken);



module.exports=router;
