var fs = require('fs');
var path = require('path');

// Define file path
var file = process.argv[2];

// Define file extension to filter
var target = "." + process.argv[3];

// Async call to read file
fs.readdir(file, fileRead);

function fileRead(err, list) {
    if(err) { return console.log(err); }

    for (var index in list) {
       // Print filename if file extension matches target
        if(path.extname(list[index]) === target){
            console.log(list[index]);
        }
    }
}