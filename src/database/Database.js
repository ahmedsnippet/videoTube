import mongoose from "mongoose";
import { DB_NAME } from './../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected To Database ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Some Error Occur While Connecting TO Database`)
    }
}

export default connectDB

