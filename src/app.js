import 'dotenv/config';
import express from "express";
import passport from "passport";
import session from "express-session"
import cors from "cors";
import logger from "./utils/logger";
import config from "./configs";
import {connect} from "./utils/db.connection";
import { googleAuth } from "./configs/google.auth";
import mongoose from "mongoose";
import {routesInit} from "./api/routes";

mongoose.set('strictQuery', true);//suppress 'strictQuery' warning..(additional)

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({limit:"20mb"}));

//express session
app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { 
            secure: false,
            expires: new Date(Date.now()+10000),
            maxAge: 10000 
        },
    })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next)=>{
    res.send("<a href='http://localhost:8090/auth/google'>Login with Google</a>");
    next();
});

app.listen(PORT, ()=>{
    logger.info(`Server is up and running on ${PORT}`);
    connect();
    routesInit(app,passport);
    googleAuth(passport); 
});
