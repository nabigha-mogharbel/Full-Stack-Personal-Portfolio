import PortfolioModel from "../models/portfolio.js"

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
const portfolioController={createPortfolio, getPortfolio}
export default portfolioController