let express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();
let app = express();
app.use(express.json());
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');

app.use('/api/web/enquiry', enquiryRoutes)



mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("connected to Monogo Db");
    app.listen(process.env.PORT, () => {
        console.log("Server is Running at port number :"+process.env.PORT)
    }) 
})