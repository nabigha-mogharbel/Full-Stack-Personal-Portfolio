import PortfolioModel from "../models/portfolio.js";
import Skill from "../models/skill.js";

export async function getskill(req, res, next) {
  try {
    Skill.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
}
export async function addskill(req, res, next) {
  let newData = req.body;
  try {
    let newSkill = new Skill(newData);
    newSkill.save((err, response) => {
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $push: { skill: newSkill._id } },
        (err, response) => {
          if (err) return next(err);
          res.status(201).send({ sucess: true, response });
        }
      );
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: true, error });
  }
}
export async function updateskill(req, res, next) {
  let id = req.params.id;
  let data = req.body;
  try {
    Skill.updateOne(
      { _id: id },
      {
        $set: data,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({ success: true, response });
      }
    );
  } catch {
    res.status(400).send({ error: true, error });
  }
}
export async function deleteskill(req, res, next) {
  let id = req.params.id;
  try {
    Skill.findByIdAndRemove({ _id: id }, (err, response) => {
      if (err) return next(err);
      PortfolioModel.updateOne(
        { _id: `${process.env.PORTFOLIO_ID}` },
        { $pull: { skill: `${id}` } },
        (err, response) => {
          if (err) return next(err);
          res
            .status(200)
            .send({ sucess: true, response});
        }
      );
    });
  } catch {
    res.status(400).send({ error: true, error });
  }
}

const skillController = { getskill, addskill, updateskill, deleteskill };
export default skillController;
