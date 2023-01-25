
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
        console.log("whaaat")
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
export async function addProject(req, res, next){
  try{
      let projectData=new projectModel({
      name:req.body.name,
      category_id:req.body.category,
      img:req.imagePath,
      url:req.body.url
    })
    projectData.save((err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    })}catch(err){res.send({error:true, err})}
}
/**
 * update category using the id
 * @param {String} req
 * @returns {Object}
 */
export async function updateProjectById(req,res,next){
  let data=req.body;
  let newData=data;
  console.log("newdata", req)
  if(data.id){
    delete newData.id
  }
  try{
    projectModel.updateOne({_id:req.body.id}, {$set: req.body}, (err,response) => {
      if(err){return next(err)}
      res.status(200).send({success:true, response})
  })
  }catch(err){
    res.status(400).send({error:true, err})
  }
}
/**
 * delete document uusing id
 * @param {String} req
 * @returns {Object}
 */
export async function deleteProjectById(req,res,next){
  try{
    projectModel.findByIdAndDelete({_id:req.body.id}, (err,response) => {
      if(err)return next(err)
      res.status(200).send({success:true, response})
    })
  }catch(err){
    res.status(400).send({error:true, err})
  }
}
const projectController = {getProjects, addProject, updateProjectById, deleteProjectById};
export default projectController;