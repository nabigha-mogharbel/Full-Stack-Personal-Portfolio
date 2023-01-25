import mongoose from "mongoose";
const {Schema, model} = mongoose;

const about = new Schema({

    bio: {
        type: String,
        required: [true,"the bio is required"]
    },
    personal_pic :{ 
        type: String,
        required: [true,"the prsonal_picture is required"]
    },
expertise : {
    type: String,
    required: [true,"The expertise is required"]
}
});

const About = model('about', about);
export default About;
