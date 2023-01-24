import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import educationRoutes from "./routes/education"

dotenv.config();
const PORT = porcess.env.PORT || 5000;
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use("/dashboard/education", educationRoutes)

app.get('/', (req, res) => {
    res.send('API is running...')
})