const mongoose=require('mongoose');
const bcrypt = require('bcrypt');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name should be present']
    },
    email:{
        type:String,
        required:[true,'Email for user should be present']
    },
    password:{
        type:String,
        required:[true,'password field should be present']
    }
},{timestamps:true});


userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};


const User=mongoose.model("User",userSchema);

module.exports=User;