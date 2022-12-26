const express=require('express');
const { getAllData, createBlog,getBlogById } = require('../controllers/blogData');
const imageGen = require('../middleware/imageGen');
const router=express.Router();

router.route('/all').get(getAllData);
router.route('/create').post(imageGen,createBlog);
router.route('/:id').get(getBlogById);

module.exports=router;