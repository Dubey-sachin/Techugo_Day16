import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import  {connectDB } from './src/config/db.js';

import router from './src/routes/userRoutes.js'

const app=express();
app.use(express.json());

app.use('/user',router);

connectDB()

app.listen(3000,()=>{
    console.log("sever is running on port 3000")
})