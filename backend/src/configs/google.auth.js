import GoogleStrategy from "passport-google-oauth20";
import passport from "passport"
import config from ".";
import User from "../api/model/user.model";
import mongoose from "mongoose";


const googleAuth = (passport) => {
    GoogleStrategy.Strategy;

    //console.log(config);

    passport.use(
        new GoogleStrategy(
            {
                clientID: config.GOOGLE_CLIENT_ID,
                clientSecret: config.GOOGLE_CLIENT_SECRET,
                callbackURL: config.GOOGLE_REDIRECT_URL,

            },
            async (req, accessToken, refreshToken, profile, callback) => {
                const userObj = {
                    googleId:profile.id,
                    displayName:profile.displayName,
                    gmail:profile.emails[0].value,
                    image: profile.photos[0].value,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName

                }
                //SELECT * from User WHERE googleId = profile.id
                let user = await User.findOne({googleId: profile.id});
                if (user){
                    return callback(null, profile);
                    
                }
                User.create(userObj)
                .then((user)=>{       
                    return callback(null,user);
                })
                .catch((err)=>{
                    return callback(err.message);
                })  
                /* const user = await User.findOrCreate({
                    where: { googleId: profile.id},
                    defaults: userObj,
                }).catch((err)=>{
                    console.log("Error Signing Up",err);
                    callback(err, null);
                });
                if(user && user[0])return callback(null, user && user[0]);  */
                
            }
        )
    );
    //serialize and deserialize functions
    passport.serializeUser((user, callback) => {
        callback(null, user.id);
    });

    passport.deserializeUser(async(id, callback)=>{
        const user = await User.findOne({where:{id}}).catch((err)=>{
            console.log("Error deserializing",err);
            callback(err,null);
        });
        if(user) callback(null, user);
    })


   /*  passport.deserializeUser((id, callback) => {
        User.findById(id, (err, user)=>{
            callback(err, user);
        });
    }); */
    
};

export {googleAuth};