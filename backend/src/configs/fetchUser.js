import express from "express";
import { isUserAuthenticated } from "../api/middleware/auth";
const router = express.Router();

router.get("/auth/user",isUserAuthenticated,(req,res)=>{
    res.json(req.user);
})

module.exports = router; 