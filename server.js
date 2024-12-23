// console.log('Node.js environment is set up!');


//***Custom Module***
// const cm=require('./customModule')
// console.log(cm('saranya'));



//****Using HTTP Server***
// require('dotenv').config();
// console.log('Port:', process.env.PORT);

// const http = require('http');
// const PORT = process.env.PORT

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Node.js setup is successful!');
// });

// server.listen(PORT, () => {
//     console.log(`Server running at ${PORT}`);
// });


//***Using Express***
require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello Express..!")
})

app.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`);
    
})
