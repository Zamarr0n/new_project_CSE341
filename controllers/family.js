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

const newMember = async (req,res) => {

    const member = {
        Name: req.body.Name,
        Type: req.body.Type,
        Age: req.body.Age
    };

    const response = await client.db('Family').collection('Family').insertOne(member)
    if(response.acknowledged){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while creating the user.`);
    }
}

const updateMember = async(req,res) => {
    //#swagger.tags-['Users']
    const userId = new Objectid(req.params.id);
    const user ={
        Name: req.body.Name,
        Type: req.body.Type,
        Age: req.body.Age,
        // ipaddress: req.body.ipaddress
    };
    const response = await client.db('Family').collection('Family').replaceOne({_id: userId}, user);
    if(response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while updating the user.`);
    }
}

const deleteMember = async(req,res) => {
    //#swagger.tags-['Users']
    const userId = new Objectid(req.params.id);
    const response = await client.db('Family').collection('Family').deleteOne({_id: userId});
    if(response.deleteCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || `Some error ocurred while deleting the user.`);
    }
}




module.exports = {
    getAll, getSingle, newMember, updateMember, deleteMember
};










