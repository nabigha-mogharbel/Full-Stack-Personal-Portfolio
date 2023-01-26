// import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../models/admin.js'
// import cookieParser from "cookie-parser";
// const router = express.Router();

// router.use(cookieParser("secret"));

const login =  (req, res) => {
    const username = req.body.username
    const password = req.body.password
    model.findOne({ username: username}).then(user =>  {
        if(!user){ 
            return res.status(400).send("Invalid username")
        }
        const exist =  bcrypt.compare(password, user.password)
        if(!exist) return res.status(400).send("Invalid password")
        const token = jwt.sign({_id:user.id}, process.env.JWT_SECRET)
        user.token= token
        res.cookie('auth-token', token, { maxAge: 900000, httpOnly: true })
        res.cookie('username', username, {maxAge: 900000, httpOnly: true});
        res.send(`Welcome ${username} `);

        // res.render("login");

    }).catch(err => {
        console.log(err)
        res.status(500).send("Internal server error")
    })
}

export default login
