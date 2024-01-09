import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./server.js";

// configration of the env
dotenv.config({
path:"./env"
})

const port=process.env.PORT||8000;





connectDB().then(()=>{
app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`)
})
})
.catch((err)=>{
        console.log(`Error In Index= ${err}`)
    })