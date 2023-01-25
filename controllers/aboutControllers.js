import { response } from "express";
import About from "../models/about.js";

//add
/**
 *
 * @param req
 * @param res
 * @return new object of about
 */
const createAbout = (req, res) => {
  const about = new About(req.body);
  about
    .save()
    .then((about) => {
      res.status(201).json(about);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
//READ
/**
 *
 * @return {Promise} Promise get all record of about collection
 */
const getAllAbout = (req, res) => {
  About.find({}).then((response) => {
    if (!response) {
      res.status(404).send({ error: " insufficient" });
    } else {
      res.status(200).send(response);
    }
  });
};
//get by id
/**
 *
 * @return {Promise} Promise get all record of about collection
 */
const getAbout = (req, res) => {
  const id = req.params.id;

  console.log("Getting");
  About.findById(id)
    .then((response) => {
      if (!response) {
        res.status(404).send("Not Found");
      }
      if (response) {
        res.status(200).send(response);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//update
/**
 *
 * @param {*} req the request object
 * @param {*} res the response object
 * @returns {Promise} Update the specified object to new state
 */
const updateAbout = (req, res) => {
  const id = req.params.id;
  const newAabout = req.body;
  About.findByIdAndUpdate(id, newAabout, {
    new: true,
    runValidators: true,
  })
    .then((update) => {
      if (update) {
        res.status(200).send(update);
      } else {
        res.status(404).send(NotFound);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Delete
/**
 * @param {*} req
 * Delete a documnent from the database use the ID of the documnent
 */
const deleteAbout = (req, res) => {
  const id = req.params.id;
  About.findByIdAndDelete(id)
    .then((Deleted) => {
      if (Deleted) {
        res.status(200).send("Deleted Successfully");
      } else {
        res.status(404).send("Error: Couldn't find");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
export default { createAbout, getAllAbout, getAbout, updateAbout, deleteAbout };
