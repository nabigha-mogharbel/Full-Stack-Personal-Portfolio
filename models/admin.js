import mongoose  from "mongoose";
const {Schema, model}= mongoose;

const admin = new Schema({
username: {
    type: 'string',
    required: true,
},
password: {
    type: 'string',
    required: true,
}
});


const Admin = model('admin', admin)
export default Admin;