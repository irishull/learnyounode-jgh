var http = require('http');
var myURL = process.argv[2];

http.get(myURL, function (res){
    res.setEncoding('utf8');
    res.on("data", function(data) {
        console.log(data);
    })
});