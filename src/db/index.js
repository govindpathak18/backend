import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInsatance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !!! DB HOST: ${connectionInsatance.connection.host}`);
        
    }catch(err){
        console.log("MONGODB connection error : ",err);
        process.exit(1);
    }
}

export default connectDB;