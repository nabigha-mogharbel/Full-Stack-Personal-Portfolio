import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import router from "./routes/link.js";

dotenv.config();
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.listen(3000 , console.log("hiiiiiiiiiiiiiiiiiiii"))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')

})
app.use("/dashbord/link", router )