import jwt from "jsonwebtoken";
// import { model } from "mongoose";
const config=process.env
const  authen = (req, res, next) => {
let token
token = req.cookies['auth-token']
// let token=req.cookie["auth-token"]
// console.log(token)

if(!token){
return res.status(401).send("Access Denied   different name")
}
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded;
    if (decoded) next()
    else res.status(401).send("Access Denied your credentials")
    
}
catch(err){
    return res.status(400).send("Access Denied"+err)
}

};

export default authen