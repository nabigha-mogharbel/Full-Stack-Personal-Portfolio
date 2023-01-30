import Link from "../models/link.js";
import PortfolioModel from "../models/portfolio.js";

export async function getlink(req, res, next) {
  try {
    Link.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  } catch (error) {
    res.status(400).send({ error: true, error });
  }
}
function addlink(req, res, next) {
  let newdata = req.body;
  let newLink = new Link(newdata);
  newLink.save((err, response) => {
    if (err) return next(err);
    PortfolioModel.updateOne(
      { _id: `${process.env.PORTFOLIO_ID}` },
      { $push: { link: newLink._id } },
      (err, response) => {
        if (err) return next(err);
        res.status(201).send({ sucess: true, response });
      }
    );
  });
}
function updatelink(req, res, next) {
  let id = req.params.id;
  let newdata = req.body;
  Link.updateOne({ _id: id }, { $set: newdata }, (err, response) => {
    if (err) return next(err);
    res.status(200).send({ success: true, response });
  });
}
function deletelink(req, res, next) {
  let id = req.params.id;
  Link.findByIdAndRemove({ _id: id }, (err, response) => {
    if (err) return next(err);
    PortfolioModel.updateOne(
      { _id: `${process.env.PORTFOLIO_ID}` },
      { $pull: { link: `${id}` } },
      (err, response) => {
        if (err) return next(err);
        res
          .status(200)
          .send({ sucess: true, response, message: "deleted link" });
      }
    );
  });
}
const links = { getlink, addlink, updatelink, deletelink };
export default links;
