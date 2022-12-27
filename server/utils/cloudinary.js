const asyncWrapper = require("../error/asyncWrapper");
const fileUpload = require('express-fileupload');
const cloudConfig=require("../config/cloudinay");
const cloudinay=require('cloudinary');

const  uploadFile=async(req)=>{
    try {
        const file=req.files.image;
    const result=await cloudinay.uploader.upload(file.tempFilePath,{
        public_id:`${Date.now()}`,
        resource_type:"auto",
        folder:"images"
    });

    const data={
        ...req.body,
        imageUrl:result.url
    }

    return data;
        
    } catch (error) {
        console.log(error);
    }
    
}


module.exports =uploadFile;