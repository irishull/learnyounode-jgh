var filterExtension = require('./lesson6module');
// Define file path
var file = process.argv[2];
// Define file extension to filter
var target = "." + process.argv[3];

filterExtension(file, target, function(err, list){
 if(err){
    return console.err(err);
 }
 
  list.forEach(function(file){
    console.log(file);
  });
 
    
});