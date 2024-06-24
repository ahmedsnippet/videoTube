import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Configuration

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// import Routers
import router from "./routes/userRouter.js";

// declare Route
app.use("/api/v1",router)


export { app };