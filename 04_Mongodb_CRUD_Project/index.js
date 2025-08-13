let express  = require('express');
const { dbConnection } = require('./dbConnection');
const { ObjectId } = require("mongodb");
let app = express();
app.use(express.json());

app.get("/student-read",async(req, res)=>{
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students-data");
    let data = await studentCollection.find().toArray();
    let resObj = {
        status :  1,
        msg : "Student List fetch Sucessfully" ,
        data
    }
    
    res.send(resObj);
})

app.post("/student-create", async (req, res) => {
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students-data")

    // let obj = {
    //     sName : req.body.sName,
    //     sPass : req.body.sPass
    // }

    let {sName, sPass} = req.body;
    let obj = {sName, sPass};

    let checkName = await studentCollection.findOne({sName});
    if(checkName){
        return res.send({status:0, msg:"Username already exist......, take another one"});
    }

    let insertRes = await studentCollection.insertOne(obj);

    let resObj = {
        status : 1,
        msg : "Data Inserted Sucessfully",
        insertRes
    }
    res.send(resObj);
})

app.delete("/student-delete/:id", async(req, res) => {
    let {id} = req.params;
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students-data");
    let delRes = await studentCollection.deleteOne({_id : new ObjectId(id)});
    let resObj = {
        status :  1,
        msg : "Data Deleted Sucessfully",
        delRes
    }
    res.send(resObj);
})

app.put("/student-update/:id", async(req, res) => {
    let {id} = req.params;
    let {sName, sPass} = req.body;

    let obj = {};
    if(sName !== '' && sName !== undefined && sName !== null){
        obj['sName'] = sName;
    }
    if(sPass !== '' && sPass !== undefined && sPass !== null){
        obj['sPass'] = sPass;
    }


    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students-data");
    let updateRes = await studentCollection.updateOne({_id : new ObjectId(id)}, {$set: obj});
    let resObj = {
        status : 1,
        msg : "Data Sucessfully updated",
        updateRes
    }
    res.send(resObj);
})

app.listen(8000);