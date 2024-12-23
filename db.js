const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = process.env.DB_URL;

const client = new MongoClient(uri);


const connectDB = async ()=>{
    try{
        await client.connect();
        console.log("Connected to MongoDb");
        return client.db("MERN_DEMO");
    }catch(err){
        console.log("MongoDB connection error",err);
        process.exit(1);
    }
}

module.exports=connectDB;