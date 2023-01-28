import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"
import adminRoutes from "./routes/admin.js"
import aboutRoutes from "./routes/about.js"
import categoriesRoutes from "./routes/category.js"
import projectRoutes from "./routes/project.js"
import linksRoutes from "./routes/link.js";
import skillsRoutes from "./routes/skill.js"
import educationRoutes from "./routes/education.js"
import experienceRoutes from "./routes/experience.js";
import portfolioRoutes from "./routes/portfolio.js";
import createError from "http-errors"
import cookieParser from "cookie-parser";
dotenv.config
const PORT = process.env.PORT
await connectDB();
const app = new express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());

app.use('/admin',adminRoutes);
app.use('/dashboard/about',aboutRoutes);
app.use("/dashboard/categories", categoriesRoutes);
app.use("/dashboard/projects", projectRoutes)
app.use("/dashboard/skills", skillsRoutes)
app.use("/dashboard/education", educationRoutes)
app.use("/dashboard/experience", experienceRoutes)
app.use("/dashboard/portfolio", portfolioRoutes)
app.use("/dashboard/links", linksRoutes )
app.use(express.static('/uploads'));
app.use("/uploads",express.urlencoded())
app.get('/', (req, res) => {
    res.send('API is running...')

})
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))

// create and error object,catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
 }); 
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
      success: false,
      message: err.message
  });
});
