const mongo = require("mongodb");
const Objectid = require('mongodb').ObjectId;


const password = encodeURIComponent(process.env.MONGO_URL);
const URL = `mongodb+srv://emiliozamarrons:${password}@cluster1.lgljyqa.mongodb.net/Family`;
const client = new mongo.MongoClient(URL);

const getAll = async(req,res) => {
    const result = await client.db("Family").collection("Family").find()
    result.toArray().then((members) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(members);
    });
}

const getSingle = async(req,res) => {
    const userId = new Objectid(req.params.id);
    const result = await client.db('Family').collection('Family').find({_id:userId})
    result.toArray().then((members) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(members[0]);
    });
}

module.exports = {
    getAll, getSingle
};










