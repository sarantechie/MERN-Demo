console.log("Node program to learn db is running....");

const express = require('express');
const app = express();
require('dotenv').config();
// const mongoose = require('mongoose');

const connectDB = require('./db');

const userRouter = require("./routes/userRouter");

const PORT = process.env.PORT;


(async () => {
    const db = await connectDB();

    const usersCollection = db.collection("users");

    const result = await usersCollection.insertOne({ name: "John Doe", age: 25 });
    console.log("Inserted document ID:", result.insertedId);

    // Fetch documents
    const users = await usersCollection.find().toArray();
    console.log("Users:", users);

    const result1 = await usersCollection.updateOne(
        { name: "John Doe" },
        { $set: { age: 30 } }
    );
    console.log("Updated documents:", result1.modifiedCount);

    const users1 = await usersCollection.find().toArray();
    console.log("Users:", users1);

    // const result = await usersCollection.deleteOne({name: 'John Doe'})
    // console.log("Deleted documents:", result.deletedCount);

    // const users2 = await usersCollection.find().toArray();
    // console.log("Users:", users2);
})();



app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.send("Hello Express");
});

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});
