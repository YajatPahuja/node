const http = require("http");

http.createServer(( req , res )=>{
    if (req.url=="/"){
        res.write(`<h1>HELLO WORLD</h1>`);
    }

    else if( req=="/about")
})