const { log } = require("console");
const file=require("fs");

//synchronise
/*const first = file.readFileSync("./content/abc.txt","utf8");
log(first);

const second = file.writeFileSync(
    "./content/qwerty.txt",
    `HELLO WORLD ${first}`,
    {flag: "a"}
    );*/
     
//asynchronise 
var data;

file.readFile( "./content/qwerty.txt" , "utf8" , ( err , result ) =>{

    if ( err ){
        log(`ERROR\n${err}`);
    }

    else {
        log(result);
        data=result;
        file.writeFile("./content/abc.txt",`NEW CONTENT ${data}`,( err , result ) =>{

            if(err)
            {
                log(err);
            }
        
            else
            {
                log("program executed");
            }
        
        })

    }
})
log("STARTING NEXT TASK");

