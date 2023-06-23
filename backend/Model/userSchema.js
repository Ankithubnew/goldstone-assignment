const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true,
    },
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,    
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
    
});
const User=mongoose.model("User",userSchema);
module.exports=User;
