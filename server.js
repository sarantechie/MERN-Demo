console.log("Node is running");

const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json())//Middleware

let users = [
    { id: 1, name: "John1", email: "john1@gmail.com" },
    { id: 2, name: "John2", email: "john2@gmail.com" },
]

//Fetch all users using get method
app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
        message: "Users Fetched Successfully"
    })
})

//Fetch all users using post method
app.post('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
        message: "Users Fetched Successfully"
    })
})

//Fetch a single user by ID using get method
app.get('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const user = users.find((item) => item.id === userID)

    if (user) {
        res.status(200).json({
            success: true,
            data: user,
            message: "Single user fetched"
        })
    } else {
        res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
})

//Create a new user
app.post('/create-user', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email,
    }
    res.status(201).json({
        success: true,
        data: newUser,
        message: "User Created Successfully"
    })
})

app.put('/update-user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    //by using findIndex
    // const userIndex=users.findIndex(item=>item.id===userId)
    // if(userIndex!==-1){
    //     users[userIndex]={id:userId,name,email}
    //     res.status(200).json({
    //         success:true,
    //         data:users[userIndex],
    //         message:"User Updated successfully"
    //     })

    //by using find
    const user = users.find(u => u.id === userId)

    if (user) {
        user.name = name;
        user.email = email;
        res.status(200).json({
            success: true,
            data: user,
            message: "User Updated successfully"
        })

    } else {
        res.status(404).json({
            success: false,
            message: "User Not found"

        })
    }
})

app.delete('/delete-user/:id', (req, res) => {
    const userID = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userID);
    if (userIndex) {
        const deletedUser = users.splice(userIndex, 1)[0]
        res.status(200).json({
            success: true,
            data: deletedUser,
            message: "User deleted Successfully"
        })
    } else {
        res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
})



app.use('/', (req, res) => {
    res.send("Hello Express");
})

app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
})