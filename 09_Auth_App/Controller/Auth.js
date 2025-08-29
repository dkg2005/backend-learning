const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async(req, res) => {
    try{    
        const {name, email, password, role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                sucess:false,
                message:"User already exists"
            });
        }

        // securing the password
        try{
            hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds
        }
        catch(err){
            return res.status(500).json({
                sucess:false,
                message:"Error In hashing of password"
            })
        }

        // create entry for User
        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        return res.status(200).json({
            sucess:true,
            message:"User created Sucessfully"
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            sucess:false,
            message:"User can't registred, please try again later" 
        })
    }
}


exports.login = async(req, res) => {

    try{
        // data fetch
        const {email, password} = req.body;
        // validate the data
        if(!email || !password){
            return res.status(400).json({
                sucess:false,
                message:"Please fill all the Details carefully"
            });
        }

        // check for the registred user
        let user = await User.findOne({email});
        // if not the registred user
        if(!user){
            return res.status(401).json({
                sucess:false,
                message:"User is not registred"
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }

        // verify password and generate JWT token
        if(await bcrypt.compare(password, user.password)){
            
            let token = jwt.sign(payload, process.env.JWT_SECRET,
                                            {
                                              expiresIn: "2h",
                                            });
            user = user.toObject(); // for the converting it explicaitylly into the object
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date( Date.now() + 3* 24 * 60 * 60 * 1000), // 3 days
                httpOnly : true
            }

            res.cookie("token", token, options).status(200).json({
                sucess:true,
                token,
                user,
                message:"User logged in successfully"
            });

        }
        else{  // if password do not matches
            return res.status(403).json({
                sucess:false,
                message:"Incorrect password"
            })
        }
    }
    catch{
        console.log(err);
        return res.status(501).json({
            sucess:false,
            message:"Server busy"
        })
    }
}