import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.midleware.js";
const router=Router();

router.route("/register").post(
    upload.fields([
        {
            name:"profilePic",
            maxCount:1

        }
    ]),
    registerUser
    );

export default router;