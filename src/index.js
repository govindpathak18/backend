// require('dotenv').config({path: './env'}); 

import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

import connectDB from "./db/index.js";
connectDB(); //second approach



/* first approach of db connection
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express();

; (async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(err) => {
            console.log("ERROR : ",err);
            throw err;
        })
        
        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (err) {
        console.log("error : ", err);
        throw err;
    }
})()
*/