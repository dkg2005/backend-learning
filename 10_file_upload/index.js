const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const fileupload = require('express-fileupload');
app.use(fileupload());

const db = require('./config/database');
db.connectDb();

const cloudDb = require('./config/cloudinary');
cloudDb.cloudinaryConnect();

const Upload = require('./routes/FileUpload');
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT : ${PORT}`);
})