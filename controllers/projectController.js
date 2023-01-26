import PortfolioModel from "../models/portfolio.js"
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
export async function addProject(req, res, next){
  console.log("hiiii")
  try{
      let projectData=new projectModel({
      name:req.body.name,
      category_id:req.body.category,
      img:req.imagePath,
      url:req.body.url
    })
    projectData.save((err, response) => {
      if (err) return next(err);
      console.log("res", projectData)
      PortfolioModel.updateOne({_id:"63d2e0039cb3eaeae7bf30df"}, {$push:{project:projectData._id}}, (err,response) => {
        if(err) return next(err)
        res.status(201).send({sucess:true,response})
      }      );
    })}catch(err){
      console.log(err)
      res.send({error:true, err})}
}
/**
 * update category using the id
 * @param {String} req
 * @returns {Object}
 */
export async function updateProjectById(req,res,next){
  console.log("wiz image")

  try{
    projectModel.updateOne({_id:req.params.id}, {$set: req.body}, (err,response) => {
      if(err){return next(err)}
      res.status(201).send({success:true, response})
  })
  }catch(err){
    res.status(400).send({error:true, err})
  }
} 
export async function updateProjectByIdWithImage(req,res,next){
  console.log("wiz img")
 let body=req.body;
 let data={name:"", category_id:"", img:"", url:""}
 body.name? data.name=body.name : delete data.name;
 body.category_id? data.category_id=body.category_id : delete data.category_id;
 body.url? data.name=body.url : delete data.url;
data.img=req.imagePath
  try{
    projectModel.updateOne({_id:req.params.id}, {$set: data}, (err,response) => {
      if(err) return next(err)
      res.status(201).send({success:true, response})
    })
  }catch(error){res.status(400).send({error:true,error})}
}
/**
 * delete document uusing id
 * @param {String} req
 * @returns {Object}
 */
export async function deleteProjectById(req,res,next){
  try{
    projectModel.findByIdAndDelete({_id:req.params.id}, (err,response) => {
      if(err)return next(err)
      res.status(200).send({success:true, response})
    })
  }catch(err){
    res.status(400).send({error:true, err})
  }
}
export async function createPortfolio(req,res,next){
  let newPort=new PortfolioModel(req.body)
  newPort.save((err,response) => {
    if(err) return next(err)
    res.status(200).send({suceess:true, response})
  })
}
export async function getPortfolio(req,res,next){
  PortfolioModel.find({}, (err,response)=>{
    if(err) return next(err)
    res.send({response:response})
  })
}
const projectController = {getProjects, addProject, updateProjectById, updateProjectByIdWithImage, deleteProjectById, createPortfolio, getPortfolio};
export default projectController;