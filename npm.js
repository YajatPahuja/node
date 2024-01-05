const _ = require("lodash");
const {log} = require("console");

const arr=[1,[2,[3,[4,[5]]]]];

const arr1 = _.flattenDeep(arr);

log(arr1);