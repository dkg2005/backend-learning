const enquiryModel = require('../../models/enquiry.model')

let enquiryInsert = (req, res) => {
    let {sName, sEmail, sPhone, sMessage} = req.body;
    let enquiry = new enquiryModel({
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    });

    enquiry.save().then(() =>{
        res.send({status:1 ,message:"Enquiry saved sucessfully"});
    }).catch((err) => {
        res.send({status:0, message:"Error while saving enqiry", error:err});
    })
}

let enquiryList = async(req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({statu:1, message:"Enquiry List fetcded sucessfully", data : enquiryList});
}

let enquiryDelete = async (req, res) => {
    let enqiryId = req.params.id;
    let deleteEnqiry = await enquiryModel.deleteOne({_id:enqiryId});
    res.send({status: 1, message:"Enquiry delete sucessfully", delRes: deleteEnqiry});
}

let enquiryUpdate = async(req, res) => {
    let enqiryId = req.params.id;
    let {sName,  sEmail, sMessage, sPhone} = req.body;
    let updatedObj = {
        name: sName,
        email: sEmail,
        phone: sPhone,
        message: sMessage
    }
    let updateRes = await enquiryModel.updateOne({_id:enqiryId},updatedObj);
    res.send({statue:1, messge:"Data update sucessfully",updateRes});
}

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate };