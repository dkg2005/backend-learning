const { MongoClient } = require('mongodb');

let dbConnectionUrl = 'mongodb://localhost:27017';
const client = new MongoClient(dbConnectionUrl);


let dbConnection = async () => {
    await client.connect();
    let db = client.db("mongpDbProject")
    return db;
}

module.exports = {dbConnection};