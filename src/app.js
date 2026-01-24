import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//basic configuration
app.use(express.json({ limit: "16kb" })); // Recieve JSON data with limit from User
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //User Sending data from the URL
app.use(express.static("public")); // Static Data to access(Publicly Viewable)
app.use(cookieParser()); // Cookie Parser Middleware

//cors Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173", // 5173 Vite development Server Code
    credentials: true, //Access for cookies
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";

import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Basecampyy");
});

export default app;
