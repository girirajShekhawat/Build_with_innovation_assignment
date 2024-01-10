import  express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
const app=express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
}));

app.use(express.json());

// importing the router
import router from "./routes/user.routes.js";

// defing the routes 
app.use("/user", router)


// this is to store the static files like imgs on the server here public is the folder name
app.use(express.static("public"))

app.use(cookieParser());

export default app;

 

 