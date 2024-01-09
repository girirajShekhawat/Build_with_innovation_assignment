import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const  connectDB= async()=>{

  try {
    
    const  connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);

    console.log(`DB_CONNECTION INSTANCE !!! HOST ${connectionInstance} , !!! HOSTDETAILS== ${connectionInstance.connection.host}`)
   

  } catch (error) {
    console.log("MongoDB Connection failed ==",error);
    // process is provided by node and exit takes diff types of no and 1 is for failure exit
    process.exit(1);
  }
}


export default connectDB;