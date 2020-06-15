const fs = require('fs');

module.exports.requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url === "/"){
        res.write("<html>");
        res.write("<header><title>Message</title></header>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        //return res.end so it wont execute following code after res.end
        return res.end();
    }

    if(url === "/message" && method === "POST"){
        const body =[];
        //on is an event listener 
        //event 'data' is fired after all chunks are read 
        req.on('data',chunk =>{ 
            body.push(chunk); //parse data chunk into an array
            console.log(body); //[ <Buffer 6d 65 73 73 61 67 65 3d 48 65 6c 6c 6f> ]
        })
        //event 'end' is fired when the data is fully parsed from the incoming request
        //return req.on so the code after if wont be executed
        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString(); 
            console.log(parsedBody); //message=Hello
            const message = parsedBody.split('=')[1];
            //It is a good practice to write non-block code so the app has high performance
            // fs.writeFileSync('message.text', message);

            fs.writeFile('message.txt', message, err => {
                res.writeHead(302, {Location: '/'});
                return res.end();
            })
            
        })
        // res.statusCode = 302; //Code for redirection
        // res.setHeader('Location', '/'); //where we redirect
        
    }
    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<header><title>Hello world</title></header>");
    res.write("<body><h1>My server</h1></body>");
    res.write("</html>");
    res.end();
    //process.exit()
}

// module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText: 'hard coded text'
// }

// module.exports.requestHandler = requestHandler;

// module.exports.handler = requestHandler;