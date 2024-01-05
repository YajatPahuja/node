/*const {sayhi} = require('./function');
console.log(sayhi);

sayhi("abc");


const name = require('./names');
console.log(name);

sayhi(name.john);
sayhi(name.peter);*/
const { log } = require("console");
const {greet, sayhi}=require("./function");
log(greet);
sayhi("abc");

