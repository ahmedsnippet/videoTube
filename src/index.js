import connectDB from "./database/Database.js";
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})


connectDB()