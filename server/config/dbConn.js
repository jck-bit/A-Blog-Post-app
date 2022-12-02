import mongoose from "mongoose";
import { config } from "dotenv";
config()

 const connectDb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error)
    }
}
export default connectDb