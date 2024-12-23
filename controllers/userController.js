// Controller functions for user operations
let users=[
    {id:1,name:"Saranya",email:"saran@gmail.com"},
    {id:2,name:"Saranya2",email:"saran2@gmail.com"},
    {id:3,name:"Saranya3",email:"saran3@gmail.com"}

]
// Home route handler
const getHome = (req, res) => {
    res.send('Welcome to the User Home Page!');
};

// About route handler
const getAbout = (req, res) => {
    res.send('This is the User About Page!');
};

const getUser = (req,res) => {
    res.json({message:`UserList ${users}`})
    
}

// Export the functions to be used in routes
module.exports = {
    getHome,
    getAbout,
    getUser
};
