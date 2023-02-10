import mongoose from "mongoose";
import config from "../configs"; //import config file in index.js
import logger from "../utils/logger"

let database;

const connect = async ()=>{
    const MONGODB_URL = config.DB_CONNECTION_STRING; //get connection string from config

    if(database) return;

    mongoose.connect(MONGODB_URL)
    .then((connection)=>{
        database = connection;
        logger.info("Database Synced");
    })
    .catch((err)=>{
        logger.error(`${err.message}`);
    });
};

export {connect};