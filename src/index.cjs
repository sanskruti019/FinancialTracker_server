"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// chakuli@019
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financhial_records_1 = __importDefault(require("./routes/financhial-records"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: './.env'
});
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(cors_1.default());
const mongoURI = "mongodb+srv://sanskrutikakad019:sanskruti123@personalfinancetracker.ciypt.mongodb.net/?retryWrites=true&w=majority&appName=PersonalFinanceTracker";
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
//middleware
app.use("/financhial-records", financhial_records_1.default);
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});
