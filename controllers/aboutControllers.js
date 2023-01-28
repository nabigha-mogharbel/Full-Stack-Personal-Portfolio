import About from "../models/about.js";
import fs from "fs";
import portfolioModel from "../models/about.js"
//add
/**
 *
 * @param req
 * @param res
 * @return new object of about
 */
const createAbout = (req, res) => {
 try{ 
  let newAbout = new About({
    bio: req.body.bio,
    personal_pic: req.imagePath,
    expertise: req.body.expertise,
  });
  newAbout.save((err, response) => {
    console.log(newAbout._id)
    if(err) return next(err)
    portfolioModel.updateOne(
      { _id: `${process.env.PORTFOLIO_ID}` },
      { $push: { about: newAbout._id } },
      (err, response) => {
        console.log("what what")
        if (err) return next(err);
        res.status(201).send({ sucess: true, response });
      }
    );
  })}catch(error){
    res.status(400).send({error:true, error})
  }
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

const updateByIdWithImageAbout = (req, res) => {
  let body = req.body;
let data = {};
let id = req.params.id;
if ("bio" in body) data.name = body.name;
if ("expertise" in body) data.expertise = body.expertise;
data.personal_pic = req.imagePath;
try {
  About.findOne({ _id: id }, (err, about) => {
    if (err) return next(err);
    fs.unlink(about.personal_pic, (err) => {
      if (err) return next(err);
      about.personal_pic = req.imagePath;
      about.save((err, updatedAbout) => {
        if (err) return next(err);
        res.status(201).send({ success: true, updatedAbout });
      });
    });
  });
}
 catch (err) {
    res.status(err.status).send(err.message);
}


};
//Delete
/**
 * @param {*} req
 * Delete a documnent from the database use the ID of the documnent
 */
const deleteAboutWithImg = (req, res) => {
  const id = req.params.id;
  About.findByIdAndDelete(id)
    .then((Deleted) => {
      if (Deleted) {
        fs.unlink(Deleted.personal_pic, (err) => {
          if (err) {
            return next(err);
          }
          portfolioModel.updateOne(
            { _id: `${process.env.PORTFOLIO_ID}` },
            { $pull: { about: `${id}` } },
            (err, response) => {
              if (err) return next(err);
              res
                .status(200)
                .send({ sucess: true, response, message: "deleted things" });
            }
          );
        });
      } else {
        res.status(404).send("Error: Couldn't find");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

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
export default { createAbout, getAllAbout, getAbout, updateAbout, deleteAbout, updateByIdWithImageAbout,deleteAboutWithImg };
