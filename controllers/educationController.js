import Model from "../models/education.js";
import PortfolioModel from "../models/portfolio.js";

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
const addEducation = (req, res,next) => {
  const body = req.body;
  console.log(body);
  try {
    const newEducation = new Model(body);
    newEducation.save((err, response) => {
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $push: { education: newEducation._id } },
        (err, response) => {
          if (err) return next(err);
          res.status(201).send({ sucess: true, response });
        }
      );
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

// update an Education

const putEducation = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;

  try {
    console.log("data", data);
    Model.updateOne({ _id: id }, { $set: data }, (err, response) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({ success: true, response });
    });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
};

// Delete an Education

const deleteEducation = (req, res, next) => {
  let id = req.params.id;
  try {
    Model.findByIdAndRemove({ _id: id }, (err, response) => {
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $pull: { education: `${id}` } },
        (err, response) => {
          if (err) return next(err);
          res
            .status(200)
            .send({ sucess: true, response, message: "deleted education" });
        }
      );
    });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
};

export default {
  getAllEducation,
  getEducation,
  addEducation,
  putEducation,
  deleteEducation,
};
