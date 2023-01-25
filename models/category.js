import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
  },
  {
    collection: "categories",
  }
);

const Category = model("Category", categorySchema);
export default Category;
