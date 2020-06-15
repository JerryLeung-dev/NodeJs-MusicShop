//Import a global module
const http = require('http');

//create a server, pamater will be a function that have two params req,res 
//If the server receives a request, then execute the function
const server = http.createServer((req, res) => {
    console.log(req);
})

//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered
server.listen(3000);