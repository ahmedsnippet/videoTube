import connectDB from "./database/Database.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Is Listening At PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Some Error Occur Server Listening`);
  });