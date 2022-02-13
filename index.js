import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors";
import goalsRouter from "./src/routes/goals.js";
import errorHandler from "./src/middleware/error.js";
import connectDB from "./src/config/db.js";

dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);

const PORT = process.env.PORT;

app.use("/api/goals", goalsRouter);
app.listen(PORT, console.log(`Server start on ${PORT}`));
