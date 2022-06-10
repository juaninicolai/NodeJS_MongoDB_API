const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require("mongodb");

let dbConnection;
let uri = process.env.MONGODB_CREDENTIAL;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(`${uri}`)
        .then((client) => {
            dbConnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err);
            return cb(err);
        });
    },
    getDb: () => dbConnection
};