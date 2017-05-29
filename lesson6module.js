var fs = require('fs');
var path = require('path');

module.exports = function (file, target, callback ) {
    
    fs.readdir(file, function(err, list) {
        
    var filteredList = [];
        if(err) { return callback(err, []); }

        for (var index in list) {
       // Print filename if file extension matches target
        if(path.extname(list[index]) === target){
            filteredList.push(list[index]);
        }
    }
    callback(null, filteredList);
})
};