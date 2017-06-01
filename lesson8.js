var http = require('http');
var bl = require('bl');
var myURL = process.argv[2];

http.get(myURL, function(res) {
    res.pipe(bl(function (err, data) {
        if(err){
            console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});