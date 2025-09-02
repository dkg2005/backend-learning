const File = require('../models/File');

exports.localFileUpload = async(req, res) => {
    try{
        const file = req.files.file;
        console.log("FILE: -> ", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH_NAME : -> ", path);

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            status:"Sucess",
            message:"Local file uploaded Sucessfully"
        })

    }
    catch(err){
        return res.send({
            sucess:false,
            message:`Error in local file upload : ${err}`
        })
    }
}