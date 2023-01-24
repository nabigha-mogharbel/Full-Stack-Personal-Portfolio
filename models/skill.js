import mongoose from "mongoose";

const {Schema , model} = mongoose

const skillSchema = new Schema ({

    name: {
        type : String,
        require : true
    } ,
    percentage : {
        type : Number,
        require : true
    }
} , {
    collection : 'skills'
})

const Skill = model ('Skill', skillSchema) ; 
export default Skill
