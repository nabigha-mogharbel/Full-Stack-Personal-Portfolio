import mongoose from "mongoose";
const {Schema, model} = mongoose;

const experienceSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    description: {
        type: String,
    }
},{
    
collection: "experience",
});

const Experience = model("Experience", experienceSchema);
export default Experience;


