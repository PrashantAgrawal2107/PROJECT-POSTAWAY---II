import mongoose from "mongoose";
import { errorHandlerMiddleware } from "../error-handler/errorHandler.js";

export const connectUsingMongoose = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB using Mongoose')
    }catch(err){
        console.log("Error while connected to db");
        errorHandlerMiddleware(err);
    }
}