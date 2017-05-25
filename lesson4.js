var fs = require('fs');

fs.readFile(process.argv[2],'utf-8', finishedReading); 

function finishedReading(err, dataFile) {
    if(err) { 
        return console.log(err); 
    }
        var dataLength = dataFile.toString().split('\n').length-1;
        console.log(dataLength);
}
