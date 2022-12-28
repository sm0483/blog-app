const express=require('express');
const { getAllData, createBlog,getBlogById, getBlogByAuthorId,editBlog, deleteBlog } = require('../controllers/blogData');
const imageGen = require('../middleware/imageGen');
const router=express.Router();
const editCheck=require('../middleware/editCheck');
const verifyAccessToken = require('../middleware/verifyAcessToken');

router.route('/all').get(getAllData);
router.route('/create').post(verifyAccessToken,imageGen,createBlog);
router.route('/:id').get(getBlogById).delete(verifyAccessToken,deleteBlog);
router.route('/user-article').post(verifyAccessToken,getBlogByAuthorId);
router.route('/edit/:id').patch(verifyAccessToken,editCheck,editBlog);


module.exports=router;