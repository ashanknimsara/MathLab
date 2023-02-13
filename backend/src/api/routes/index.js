const router = require("express").Router();
const { User } = require("../model/user.model");

const successLoginUrl = "http://localhost:3000/success";
const errorLoginUrl = "http://localhost:3000/error";

const routesInit = (app, passport)=>{
    app.get("/auth/google" ,passport.authenticate("google",{scope:["profile","email"]}));
    app.get(
        "/auth/google/callback", passport.authenticate("google",{
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl,
    }),
    (req, res)=>{
        console.log("User:",req.user);
        console.log("User Authenticated");
    }
    );

    
};  

export {routesInit}