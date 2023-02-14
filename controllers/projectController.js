import PortfolioModel from "../models/portfolio.js";
import projectModel from "../models/project.js";

/**
 * get all projects from projects collection
 * @param {String} req
 * @returns {Object}
 */
export async function getProjects(req, res, next) {
  try {
    projectModel.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
}
/**
 * add all categories from categories collection
 * !!! IMPORTANT: the data be sent should be form-data, all of them
 * @param {String} req
 * @returns {Object}
 */
export async function addProject(req, res, next) {
  console.log("hiiii");
  try {
    let projectData = new projectModel({
      name: req.body.name,
      category_id: req.body.category,
      img: req.imagePath.split("/")[1],
      url: req.body.url,
    });
    console.log("recieved reuest");
    projectData.save((err, response) => {
      console.log("mongo saved project");
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $push: { project: projectData._id } },
        (err, response) => {
          if (err) return next(err);
          console.log("updated ortfolio")
          res.status(201).send({ sucess: true, response });
        }
      );
    });
  } catch (err) {
    console.log(err);
    res.send({ error: true, err });
  }
}
/**
 * update category using the id
 * @param {String} req
 * @returns {Object}
 */
export async function updateProjectById(req, res, next) {
  try {
    projectModel.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      (err, response) => {
        if (err) {
          return next(err);
        }
        res.status(201).send({ success: true, response });
      }
    );
  } catch (err) {
    res.status(400).send({ error: true, err });
  }
}
export async function updateProjectByIdWithImage(req, res, next) {
  try {
   id = req.params;
    let body = req.body;
    let data = {};
    if(body.name){data.name = body.name}
    if(body.category){data. category_id = body.category}
    if(req.imagePath){data.img = req.imagePath.split("/")[1]}
    let id = req.params.id;
    projectModel.updateOne({ _id: id }, { $set: data }, (err, response) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({ success: true, response });
    });
    } catch (err) {
    res.status(err.status).send(err.message);
    }
    
}
/**
 * delete document uusing id
 * @param {String} req
 * @returns {Object}
 */
export async function deleteProjectById(req, res, next) {
  let id = req.params.id;
  try {
    projectModel.findByIdAndDelete({ _id: req.params.id }, (err, response) => {
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $pull: { project: `${id}` } },
        (err, response) => {
          if (err) return next(err);
          res
            .status(200)
            .send({ sucess: true, response, message: "deleted project" });
        }
      );
    });
  } catch (err) {
    res.status(400).send({ error: true, err });
  }
}
const projectController = {
  getProjects,
  addProject,
  updateProjectById,
  updateProjectByIdWithImage,
  deleteProjectById,
};
export default projectController;
