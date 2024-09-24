// chakuli@019
import express from "express";
import mongoose from "mongoose";
import financhialRecordRouter from "./routes/financhial-records";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config({
    path : './.env'
})
const app = express();
const port = process.env.PORT||3001;

app.use(express.json());
app.use(cors());

const mongoURI : string = 
"mongodb+srv://sanskrutikakad019:sanskruti123@personalfinancetracker.ciypt.mongodb.net/?retryWrites=true&w=majority&appName=PersonalFinanceTracker";

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) =>console.error("Failed to connect to MongoDB",err));
//middleware
app.use("/financhial-records", financhialRecordRouter);
app.listen(port, () =>{
    console.log(`Server Running on Port ${port}`);
});

