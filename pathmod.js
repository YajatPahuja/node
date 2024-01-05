const {log} = require("console");

const path = require("path");
log(path.sep);

const filepath = path.join("content","subcontent","est.txt");

log(filepath);

const file_location= path.sep;

log(file_location);

const base = path.basename(filepath);

log(base);

const abs=path.resolve(__dirname,"abc.js");
log(abs);
