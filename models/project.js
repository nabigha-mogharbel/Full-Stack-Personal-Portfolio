import mongoose from "mongoose";
const { Schema, model } = mongoose;


const imageSchema= new Schema({
  file_name:{
      type:String,
      required:true
  },
  image:{
      type:Buffer,
      required:true
  }
})
const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    category_id:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category"

    },
    img:{
      type:String,
      required:true
    },
    url:{
        type:String,
        required:true
    }
  },
  {
    collection: "projects",
  }
);
projectSchema.pre(['find', 'findOne'], function () {
    this.populate(['category_id']);
 });
const Project = model("Project", projectSchema);
export default Project;
