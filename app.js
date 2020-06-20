//Import a global module
const express = require('express'); //return a function

const path = require('path');
const bodyParser = require('body-parser'); //a third-party library to parse incoming request

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express(); //execute the function which then return many logics 
//uses a middleware, receives req, res, and next as parameters

app.use(bodyParser.urlencoded({extended: false})); // return a decoded coming request and a next() function
// If we define path for the routes, the sub-paths in route will be appended to the root path we define
//It also means that the app will only look into the route if the path is /xxx

//let the folder be accessed by public, not protected by express, router
//let public folder be accessible by forwarding in file system
app.use(express.static(path.join(__dirname, "/public")));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views',"404.html"));
})



//res.end : ends the response crafting process and at this point send back response to user
//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered


// const server = http.createServer(app);
// server.listen(3000);
// --------------Equals to --------------
app.listen(3000);


