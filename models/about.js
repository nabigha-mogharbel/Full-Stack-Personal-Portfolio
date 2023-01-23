import mongoose from "mongoose";
const {Schema, model} = mongoose;

const about = new Schema({

    bio: {
        type: String,
        required: true,
    },
    personal_pic :{ 
        type: String,
        required: true,
    },
expertise : {
    type: String,
    required: true,
}
});

const About = model('about', about);
export default About;
