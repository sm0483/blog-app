const express=require('express');
const { getAllData, createBlog,getBlogById, getBlogByAuthorId,editBlog } = require('../controllers/blogData');
const imageGen = require('../middleware/imageGen');
const router=express.Router();
const editCheck=require('../middleware/editCheck');

router.route('/all').get(getAllData);
router.route('/create').post(imageGen,createBlog);
router.route('/:id').get(getBlogById);
router.route('/user-article').post(getBlogByAuthorId);
router.route('/edit/:id').patch(editCheck,editBlog);



module.exports=router;