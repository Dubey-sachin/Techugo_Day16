import mongoose from 'mongoose';

export const connectDB=async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("databse connected")
    } catch (error) {
     console.log(error.message)   
    }
}