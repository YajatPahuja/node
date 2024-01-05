const {log} = require('console');
//console.log(log);

const os=require("os");


const obj={
    machine:os.machine(),
    fremem:os.freemem()
}

log(obj);