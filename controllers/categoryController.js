import mongoose from "mongoose";
import categoryModel from "../models/category.js";
const db = "Portfolio";

/**
 * get all categories from categories collection
 * @param {String} req
 * @returns {Object}
 */
export async function getCategories(req, res, next) {
    try {
      categoryModel.find({}, (err, response) => {
        if (err) return next(err);
        console.log("whaaat")
        res.status(200).send({ success: true, response });
      });
    } catch (error) {
      res.status(400).send({ error: true, error });
    }
}
/**
 * recieve id from req body.
 * get the category from categories collection using id
 * !!! IMPORTANT: follow this path http://localhost:3000/dashboard/category/<id> 
 * DON'T USE http://localhost:3000/dashboard/category/?id=<id>
 * @param {String} req
 * @returns {Object}
 */
export async function getCategoryById(req,res,next){

  try{categoryModel.findOne({_id:req.params.id},(err, response) => {
    if (err) return next(err)
    res.status(200).send({sucess:true, response})
  })}catch(error){
    res.status(400).send({error:true, error})
  }
}
/**
 * recieve the new category from req body
 * add a new unique category to the categories collection. 
 * It returns error if the name of the category is duplicate
 * @param {String} req
 * @returns {Object}
 */
export async function addCategory(req, res, next) {
  let body = req.body;
  try {
    let newCategory = new categoryModel(body);
    newCategory.save((err, response) => {
      if (err) return next(err);
      res.status(201).send({ success: true, response });
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
}
/**
 * recieve the id and newvalue from req body
 * it uses the id name that matches the req id
 * @param {String} req
 * @returns {Object}
 */
export async function editCategoryById(req, res, next) {
    let body = req.body;
    //let id=req.body.id
    try {
        categoryModel.updateOne({_id:req.params.id},{$set:body}, (err,response) => {
            if(err){return next(err)}
            res.status(201).send({success:true, response})
        })
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
}

/**
 * recieve id from req body.
 * delete the category which have matching id in the database 
 * @param {String} req
 * @returns {Object}
 */
export async function deleteCategoryById(req, res, next) {
    try {
        categoryModel.findByIdAndDelete({_id:req.params.id}, (err,response) => {
            if(err){return next(err)}
            res.status(200).send({success:true, response})
        })
    } catch (error) {
      console.log(error);
      res.status(400).send({ error: true, error });
    }
  }
const categoryController = { getCategories, getCategoryById, addCategory, editCategoryById, deleteCategoryById };
export default categoryController;
