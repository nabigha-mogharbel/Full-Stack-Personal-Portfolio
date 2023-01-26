import jwt from "jsonwebtoken";
// import { model } from "mongoose";

const  authen = (req, res, next) => {
let token
if(!token){
    token = req.cookies['token-auth']
res.status(401).send("Access Denied")
}
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.admin = decoded;
    next();
}
catch(err){
    return res.status(400).send("Access Denied"+err)
}

};

export default authen