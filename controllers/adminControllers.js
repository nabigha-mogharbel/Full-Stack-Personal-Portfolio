import admin from "../models/admin.js";

// Create Admin
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @return {Promise} Promise Create Admin
 */

const createAdmin = async (req,res) => {
const body = req.body;
try {
    const newAdmin = new admin(body)
    await newAdmin.save();
    res.send(newAdmin);
}
catch (err) {res.status(400).send(err);}
}

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

export default {updateAdmin,createAdmin,getAdmin};