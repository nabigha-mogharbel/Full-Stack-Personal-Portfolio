import admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
// Create Admin
/**
 *
 * @param {*} req
 * @param {*} res
 * @return {Promise} Promise Create Admin
 */



const createAdmin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const nameExist = await admin.findOne({ username: username });
  if (nameExist) {
    res.status(400).send("the name is already registered");
  }
  else{
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  console.log(hash);
  const newAdmin = new admin({
    username: username,
    password: hash,
  });
  try {
    await newAdmin.save((err)=>{
      if(err){
        console.log(err);
      }
    });
    const theId = { _id: newAdmin._id }
    const token = jwt.sign(theId, process.env.JWT_SECRET,{expiresIn:'24h'});
    newAdmin.token = token;
    res.cookie("token-auth", token, { maxAge: 900000, httpOnly: true });
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).send(err.message);
  }
  }
};


/**
 *
 * @param {*} req
 * @param {*} res
 * return {Promise} Promise The admin {Username and Password}
 */
//get admin

const getAdmin = async (req, res) => {
  const body = req.body;
  try {
    const Admin = await admin.find({});
    res.send(Admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

// update Admin
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns Update The current Admin object, to new Admin object
 */
const updateAdmin = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  try {
    const adminNew = await admin.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (adminNew) {
      return res.send(adminNew);
    }
    if (!adminNew) {
      return res.status(404).send("Invalid Admin");
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

export default { updateAdmin, createAdmin, getAdmin };
