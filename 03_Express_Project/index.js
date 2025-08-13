let express = require('express');
const { checkToken } = require('./checkToken');
require("dotenv").config(); 

let app= express();
app.use(express.json());       // add this line when u are using the json data to send the post req from frontend 
// abobe is inbuilt in middleware 
console.log(process.env.MYTOKEN);

// let myToken = '12345';

// let checkToken = (req, res, next) => {
//     console.log("Acessing the middleware");
//     if(req.query.token == '' || req.query.token == undefined) {
//           res.send({
//             status : 0,
//             msg : "Please Fill the Token"
//         })
//     }
//     if(req.query.token != myToken){
//         return res.send({
//             status : 0,
//             msg : "Invalid Token"
//         })
//     }
//     next();
// }
// app.use(checkToken)

app.get('/', (req, res) => {
    res.send({status:200, Message:"Home Page Api"});
});
  
app.get('/about', (req, res) =>{
    res.send({status:200, Message:"About page Api"})
})

app.get('/post/:id', checkToken, (req, res) =>{
    let currPostId = req.params.id;
    res.send(`post id is ${currPostId}`);
})

// post request can take the data from frontend in the json data , queryData and the params which is mentioned abobe.
app.post("/login", (req, res) =>{

    // alternate options available for below one to taking the json data
    res.status(200).json({
        status : 1,
        msg : "login sucess"
    })
    // res.send({
    //     status: 200,
    //     jsonData : req.body,
    //     queryData : req.query
    // })
})


app.listen(process.env.PORT)
     