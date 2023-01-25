import Model from `../models/experience.js`;


   // callback functions used in author routes
   //get all the Experiences
    const getAllExperience = ( req, res, next ) =>{
     Model.find({}, (err, response) =>{
       if (err) return next(err);
       res.status(200).send({ success: true, response });
     }); 
   };

    //get an Experience by id

const getExperience = (req, res, next) => {
     let { id } = req.params;
     Model.findOne({ _id: id }, (err, response) => {
         if (err) return next(err);
         res.status(200).send({ success: true, response });
     });
   };

   //Add new Education

const addExperience = (req,res) => {
  const body = req.body;
  try{
  const newExperience = new Model(body);
  newExperience.save()
  res.send(newExperience);
}
catch(err){return res.status(400).send(err.message);}
}
export default {getAllExperience,getExperience,addExperience}
