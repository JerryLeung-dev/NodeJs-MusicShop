//Import a global module
const express = require('express'); //return a function
const bodyParser = require('body-parser'); //a third-party library to parse incoming request

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express(); //execute the function which then return many logics 
//uses a middleware, receives req, res, and next as parameters

app.use(bodyParser.urlencoded({extended: false})); // return a decoded coming request and a next() function

app.use(adminRoutes);
app.use(shopRoutes);



//res.end : ends the response crafting process and at this point send back response to user
//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered


// const server = http.createServer(app);
// server.listen(3000);
// --------------Equals to --------------
app.listen(3000);


