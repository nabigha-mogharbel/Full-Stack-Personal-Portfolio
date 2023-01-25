import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import admin from "./routes/admin.js"
import about from "./routes/about.js"
import categoriesRoutes from "./routes/category.js"
import projectRoutes from "./routes/project.js"
import router from "./routes/link.js";
import skill from "./routes/skill.js"
import educationRoutes from "./routes/education.js"


dotenv.config
const PORT = process.env.PORT
await connectDB();
const app=new express();
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.listen(3000 , console.log("hiiiiiiiiiiiiiiiiiiii"))
app.use(express.json());
app.use('/admin',admin);
app.use('/about',about);
app.use("/dashboard", categoriesRoutes);
app.use("/dashboard", projectRoutes)
app.use("/dashbord/skill", skill)
app.use("/dashboard/education", educationRoutes)
app.use(express.static('/uploads'));
app.use("/uploads",express.urlencoded())
app.get('/', (req, res) => {
    res.send('API is running...')

})
console.log(PORT)
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))
app.use("/dashbord/link", router )
