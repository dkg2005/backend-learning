// auth, isStudent ,  isAdmin

const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.auth = (req, res, next) => {
    try{
        // extracting the token
        const token = req.body.token;
        if(!token){
            return res.status(400).json({
                sucess:false,
                message:"Token Missing"
            })
        }

        // verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;
        }catch(err){
            return res.status(401).json({
                sucess:false,
                message:"Token is invalid"
            });
        }
        next();

    }catch(err){
        return res.status(500).json({
            sucess:false,
            message:"There is some probelem in authentication"
        });
    }
}

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role != "Student"){
            return res.status(401).json({
                sucess:false,
                message:"This is the protected route for the student"
            });
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            sucess:false,
            message:"uset role is not matching"
        })
    }
}


exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role != "Admin"){
            return res.status(401).json({
                sucess:false,
                message:"This is the protected route for the Admin"
            });
        }
        next();
    }
    catch(err){
        return res.status(500).json({
            sucess:false,
            message:"uset role is not matching"
        })
    }
}