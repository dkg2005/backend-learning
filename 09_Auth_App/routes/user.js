const express = require('express');
const router = express.Router();

const { login, signup } = require('../Controller/Auth');
const { auth, isStudent, isAdmin } = require('../middleware/auth');

router.post('/login', login);
router.post('/signup', signup);

router.get('/test', auth, (req, res) => {
    res.send({
        sucess:true,
        message:"Testing the protected route"
    })
})

router.get('/student', auth, isStudent,(req, res) =>{
    res.send({
        sucess:true,
        message:"Acessing protected route of student"
    });
})

router.get('/admin', auth, isAdmin,(req, res) =>{
    res.send({
        sucess:true,
        message:"Acessing protected route of admin"
    });
})

module.exports = router;
