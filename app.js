//Import a global module
const http = require('http');

//create a server, pamater will be a function that have two params req,res 
//If the server receives a request, then execute the function

//res.end : ends the response crafting process and at this point send back response to user
const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<header><title>Hello world</title></header>");
    res.write("<body></body>");
    res.write("</html>");
    res.end();

})

//server not executing the script immediately but listen to request
//3000 is port. when user accesses port 3000 on browser, server listens and responds
// the server event is constantly looped as long as event listener registered
server.listen(3000);