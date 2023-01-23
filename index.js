import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"

dotenv.config();
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')
})