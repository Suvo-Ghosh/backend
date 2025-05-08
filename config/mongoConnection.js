import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGOOSE_URL}/bookingSystem`)
    } catch (error) {
        console.error(error);
        console.log("Error while connecting database");
    }
}

export default connectDB; 