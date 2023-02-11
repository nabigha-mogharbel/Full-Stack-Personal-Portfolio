import mongoose from "mongoose";
const { Schema, model } = mongoose;

const educationSchema = new Schema(
  {
    major: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
  },
  {
    collection: "educations",
  }
);

const Education = model("Education", educationSchema);
export default Education;
