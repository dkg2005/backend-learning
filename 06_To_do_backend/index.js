const express = require('express');
const dbConnect = require('./config/dbConnect')
const app = express();
require('dotenv').config();
app.use(express.json());
const todoRoutes = require('./routes/todos');

// console.log("TO-DO-APP");

// Mount the Routes
app.use('/api/v1', todoRoutes);


app.get("/",(req, res) => {
    res.send(`<h1> 
        This is the Home Page
        </h1>`)
})


// connect the database
dbConnect();

// lisetn the port
app.listen(process.env.PORT, () => {
    console.log(`Server is connected sucessfully on PORT : ${process.env.PORT}`);
});

