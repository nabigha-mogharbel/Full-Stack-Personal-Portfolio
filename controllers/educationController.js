import Model from "../models/education.js";

// callback functions used in education routes
//get all the educations
const getAllEducation = (req, res, next) => {
  Model.find({}, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
};

//get an education by id
const getEducation = (req, res, next) => {
  let { id } = req.params;
  Model.findOne({ _id: id }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
};


//Add new Education
/**
 * 
 */
const addEducation = (req,res) => {
  const body = req.body;
  try{
  const newEducation = new Model(body);
  newEducation.save()
  res.send(newEducation);
}
catch(err){return res.status(400).send(err.message);}
}
export default {getAllEducation,getEducation,addEducation}

