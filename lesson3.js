var fs = require('fs');
var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);
var str = buf.toString();
var splitStr = str.split('\n');

console.log(splitStr.length-1);