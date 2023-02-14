const router = require("express").Router();
const { User } = require("../model/user.model");
const {isUserAuthenticated} = require("../middleware/auth");

const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";

const routesInit = (app, passport)=>{
    app.get("/auth/google" ,passport.authenticate("google",{scope:["profile","email"]}));
    app.get(
        "/auth/google/callback", passport.authenticate("google",{
        failureMessage: "Cannot Login to Google, please try again",
        failureRedirect: errorLoginUrl,
        successRedirect: successLoginUrl,
    }),
    (req, res)=>{
        console.log("User:",req.user);
        res.send("Thank you for signing in"); //coderone
        //console.log("User Authenticated");
    }
    );

    //check user is authenticated
    /* app.get("/test", isUserAuthenticated, (req,res)=>{

    }) */


    
};  

export {routesInit}