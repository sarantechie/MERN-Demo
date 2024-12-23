console.log("Node Project for routing and controller");;

const express=require("express");
const app=express()
require("dotenv").config();
const PORT=process.env.PORT

const userRoutes=require('./routes/userRoutes');
app.use(express.json())

//using only express
//const homeController=require('./controllers/homeController')

// app.get('/',homeController.getHomePage);
// app.get('/about',homeController.getAboutPage);

//using route directly
// const route=express.Router();

// route.get('/home',homeController.getHomePage);
// route.get('/about',homeController.getAboutPage);

// app.use('',route);

//***Using with routes and controller */

app.use('/users',userRoutes)

// app.use('/',(req,res)=>{
//     res.send("Hello Express");
// })


app.listen(PORT,()=>{
    console.log("Server running at ",PORT);
    
})