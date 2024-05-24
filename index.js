import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"

const app=express();
app.use(bodyParser.json());

dotenv.config();

const PORT=process.env.PORT||3000;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connection successful")
    app.listen(PORT,()=>{
        console.log(`server is running on port:${PORT}`)
    
    })
}).catch(error=>console.log(error));