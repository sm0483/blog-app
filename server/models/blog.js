const mongoose=require('mongoose');


const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String,
        required:[true,'Blog heading should be present']
    },
    blogData:{
        type:String,
        required:[true,'Blog data should be present']
    },

    imageUrl:{
        type:String,
        required:[true,'thumbnail for blog should be present']
    },

    authorId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:[true,'Author id should be present']
    },
    authorName:{
        type:String,
        required:[true,'Author id should be present']
    }

},{timestamps:true});


const Blog=mongoose.model("Blog",blogSchema);

module.exports=Blog;