import mongoose from "mongoose";
const { Schema, model } = mongoose;

const educationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "educations",
  }
);

const Education = model("Education", educationSchema);
export default Education;
