import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture: {
        type:String,  
        
    }

},{timestamps:true});


// bcrypting the password
userSchema.pre("save", async function (next){
 if(!this.password.isModifed("password")) return next();

this.password= await bcrypt.hash(this.password,10);
next()
})

// decrypting the password and comparing it
userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password)
}


export  const User=mongoose.model("User",userSchema);