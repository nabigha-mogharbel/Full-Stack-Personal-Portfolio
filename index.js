import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import categoriesRoutes from "./routes/category.js"
import projectRoutes from "./routes/project.js"

dotenv.config();
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use(express.static('/uploads'));
app.use("/uploads",express.urlencoded())
app.use("/dashboard", categoriesRoutes);
app.use("/dashboard", projectRoutes)
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))