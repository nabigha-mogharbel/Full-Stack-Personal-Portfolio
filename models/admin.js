import mongoose  from "mongoose";
const {Schema, model}= mongoose;

const admin = new Schema({
username: {
    type: 'string',
    required: true,
    maxLength:[30, "Name must be 30 at least"],
    minLength:[2, "Name must be 2 at minimum"]
},
password: {
    type: 'string',
    max:[100,"It's To much"],
    minLength:[2, "The password its not Valid, Try more character "],
    required: true,
}

});


const Admin = model('admin', admin)
export default Admin;