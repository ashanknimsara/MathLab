const router = require("express").Router();
const { User } = require("../model/user.model");
const routesInit = (app, passport)=>{
    app.get("/auth/google" ,passport.authenticate("google",{scope:["profile","email"]}));
    app.get(
        "/auth/google/callback", passport.authenticate("google",{
        failureRedirect:"/login",
    }),
    (req, res)=>{
        console.log("User Authenticated");
        res.redirect("/profile");
    }
    );

    router.route("/profile/:id").get(async (req, res) => {
        let UserId = req.params.id;
        await User.findById(UserId).then(() => {
            res.status(200).send({ status: "User fethced",User : User });
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetching User", error: err.message });
        })
    
    })
};  

export {routesInit}