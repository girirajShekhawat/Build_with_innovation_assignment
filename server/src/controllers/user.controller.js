import {User} from "../models/user.model.js";
 import fileUpload from "../utils/cloudinary.js";


export const registerUser = async (req,res)=>{

     try {
        const {name,email,password,phoneNo}=req.body;
    
        // checking if any of the field is empty
        if(name===""|| email==="" || password===""){
        return res.status(400).json({
            msg:'input fields are empty'
        })
        }

        // checking as if user is already exists ?
      const isUserExisted=await User.findOne(
    
        {$or : [
            {email},
            {phoneNo}
             ]
        }
      )
if(isUserExisted){
    return res.status(409).json({
        msg:'user is already exist with this email or phone'
    })
}
 const profilePicLocalPath=req.files?.profilePic[0].path;
     
 const profilePic=await fileUpload(profilePicLocalPath);

     const createUser = await User.create({
            name,
            email,
            profilePic:profilePic.url|| "",
            password,
            phoneNo:phoneNo||"",
          })

    if(!createUser){
        res.status(500).json({
            msg:"user not register"
        })
    } 
    
    return res.status(201).json({
        msg:"user is registered",
        data:createUser,
    })
     } catch (error) {
        console.log("Error!! in registering user",error);
        res.status(400).json({
            msg:`Error in user registering  ${error}`
        })
     }

  
}