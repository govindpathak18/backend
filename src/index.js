// require('dotenv').config({path: './env'}); 

import dotenv from "dotenv";
dotenv.config({
    path: './env'
})

//second approach
import connectDB from "./db/index.js";
connectDB()
    .then(() => { //starting server

        const port = process.env.PORT || 8000;

        const server = app.listen(port, () => {
            console.log(`Server is running at port : ${port}`);
        });

        server.on("error", (err) => {
            console.log("server error : ", err);
            process.exit(1);
        })
        
    })
    .catch((err) => {
        console.log("DB connection FALIED || ", err);
        process.exit(1);
    })



/* first approach of db connection
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
const app = express();

;(async () => {
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
        console.log("db connection error: ", err);
        throw err;
    }
})()
*/