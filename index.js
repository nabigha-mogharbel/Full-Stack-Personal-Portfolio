import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import admin from "./routes/admin.js"
import about from "./routes/about.js"
dotenv.config
const PORT = process.env.PORT
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use(express.json());
app.use('/admin',admin);
app.use('/about',about);
app.get('/', (req, res) => {
    res.send('API is running...')
})
console.log(PORT)
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
