import express, { response } from "express";
import Link from "../models/link.js";


export async function getlink (req , res , next){
    try {
        Link.find({},(err , response) => {
            if (err) return next(err);
            res.status(200).send({success:true , response})
        })
    }
    catch(error){
        res.status(400).send({error:true , error})
    }

}
function addlink(req , res , next){
    let newdata= req.body
    new Link(newdata).save((err ,response)=>{
        if(err) return next(err);
        res.status(200).send({success:true , response})
    })


}
function updatelink(req,res,next){
    let updatebyid = req.params.id
    let newdata = req.body
    Link.updateOne({_id:updatebyid},{$set:newdata},(err,response)=>{
        if(err) return next(err)
        res.status(200).send({success:true , response})
    })
}
function deletelink (req,res,next){
    let deletelink = req.params.id
    Link.findByIdAndRemove({_id:deletelink},(err,response)=>{
        if(err) next (err)
        res.status(200).send({success:true , response})
    })

}
const links = {getlink,addlink,updatelink,deletelink}
export default links