const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/posts');
const dbConnect = require('./config/dbConnect');
require('dotenv').config();
app.use(express.json());

// mounting of the routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
    res.send(`<h1> This is the home page of the Blog app </h1>`)
})



dbConnect();
app.listen(process.env.PORT, () => {
    console.log(`Server is conneted Sucessfully at ${process.env.PORT}`);
})






