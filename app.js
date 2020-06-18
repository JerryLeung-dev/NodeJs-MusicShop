//Import a global module
const http = require('http');


const express = require('express'); //return a function
const bodyParser = require('body-parser'); //a third-party library to parse incoming request

const app = express(); //execute the function which then return many logics 
//uses a middleware, receives req, res, and next as parameters

app.use(bodyParser.urlencoded({extended: false})); // return a decoded coming request and a next() function

app.use('/add-product',(req, res, next) => {
    res.send('<html><form method="POST" action="/product"><h1>Add product</h1><input type="text" name="product"/><button type="submit">Add</button</form></html>');
});

app.use('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    //default content-type is text/html, which is set automatically by Express
    res.send('<h1>Hello</h1>');
});



//res.end : ends the response crafting process and at this point send back response to user
//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered


// const server = http.createServer(app);
// server.listen(3000);
// --------------Equals to --------------
app.listen(3000);


