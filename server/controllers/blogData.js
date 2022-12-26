const asyncWrapper = require("../error/asyncWrapper");
const Blog = require("../models/blog");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error/custom");


const getAllData=asyncWrapper(async(req,res)=>{
    const blogData=await Blog.find({});
    res.status(StatusCodes.OK).json(blogData);
})



const createBlog=asyncWrapper(async(req,res)=>{
    const response=await Blog.create(req.body);
    res.status(StatusCodes.OK).json(response);
})


const getBlogById=asyncWrapper(async(req,res)=>{
    const {id}=req.params;
    const response=await Blog.findById(id);
    if(!response) throw new CustomError("Data not found",StatusCodes.NOT_FOUND);
    res.status(StatusCodes.OK).json(response)
})


const getBlogByAuthorId=asyncWrapper(async(req,res)=>{
    
})

module.exports={
    getAllData,
    createBlog,
    getBlogById
}
