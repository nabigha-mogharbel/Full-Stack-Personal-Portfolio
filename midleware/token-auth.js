import jwt from "jsonwebtoken";
// import { model } from "mongoose";
const config=process.env
const  authen = (req, res, next) => {
let token
//token = req.cookies['auth-token']
// let token=req.cookie["auth-token"]
// console.log(token)
token=req.headers["auth-token"]

if(!token){
return res.status(401).send("Access Denied   different name")
}
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded;
    if (decoded) next()
    else res.status(401).send({message: "Access Denied"})
    
}
catch(err){
    console.log(req)
    return res.status(400).send({message: err.message})
}

};

export default authen