//Import a global module
const http = require('http');

const express = require('express'); //return a function

const app = express(); //execute the function which then return many logics 
//uses a middleware, receives req, res, and next as parameters
app.use((req,res,next) => {
    console.log("middleware A");
    next();
});

app.use((req,res,next) => {
    console.log("middleware B");
});



//res.end : ends the response crafting process and at this point send back response to user
const server = http.createServer(app);

//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered
server.listen(3000);