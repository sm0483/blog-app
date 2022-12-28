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
    console.log(req.body);
    const {id}=req.params;
    const response=await Blog.findById(id);
    if(!response) throw new CustomError("Data not found",StatusCodes.NOT_FOUND);
    res.status(StatusCodes.OK).json(response)
})


const getBlogByAuthorId=asyncWrapper(async(req,res)=>{
    const {userId:authorId}=req.body;
    console.log(authorId);
    const response=await Blog.find({authorId});
    if(!response){
        res.status(StatusCodes.OK).json({
            message:"You have no article present"
        })
        return;
    }
    res.status(StatusCodes.OK).json(response);
})


const editBlog=asyncWrapper(async(req,res)=>{
    const {id:_id}=req.params;
    const updatedData=await Blog.findOneAndUpdate({_id},req.body,{runValidators:true,new:true});
    console.log(updatedData);
    res.status(StatusCodes.OK).json(updatedData);
})

const deleteBlog=asyncWrapper(async(req,res)=>{
    const {id:_id}=req.params;
    const response=await Blog.findOneAndDelete({_id});
    res.status(StatusCodes.OK).json(response);

})



module.exports={
    getAllData,
    createBlog,
    getBlogById,
    getBlogByAuthorId,
    editBlog,
    deleteBlog
}
