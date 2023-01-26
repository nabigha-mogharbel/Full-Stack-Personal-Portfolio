import mongoose from "mongoose";
const { Schema, model } = mongoose;
 const aboutSchema= new Schema({
    about_id:{
    type:Schema.Types.ObjectId,
    ref:"About"}
});
const linkSchema= new Schema({
   link_id:{ type:Schema.Types.ObjectId,
    ref:"Link"}
})
const educationSchema= new Schema({
    education_id:{
    type:Schema.Types.ObjectId,
    ref:"Education"}
})

const experienceSchema=new Schema({
    experience_id:{
        type:Schema.Types.ObjectId,
        ref:"Expereince"
    }
})

const projectSchema= new Schema({
    project_id:{type: Schema.Types.ObjectId,
    ref: "Project"}
})
const skillSchema=new Schema({
    skill_id:{
        type:Schema.Types.ObjectId,
        ref:"Skill"
    }
})

const portfolioSchema = new Schema(
  {
    about: [aboutSchema],
    experience:[{    type:Schema.Types.ObjectId,
        ref:"Experience"}],
    skill:[{    type:Schema.Types.ObjectId,
        ref:"Skill"}],
    project:[{    type:Schema.Types.ObjectId,
        ref:"Project"}],
    education:[{    type:Schema.Types.ObjectId,
        ref:"Education"}]
  },
  {
    collection: "portfolio",
  }
);
portfolioSchema.pre(['find', 'findOne'], function () {
    this.populate(['about', 'experience', 'skill', 'project', 'education']);
 });
const Portfolio = model("Portfolio", portfolioSchema);
export default Portfolio;
