var fs = require('fs');
var path = require('path');

module.exports = function() {

  var file = fs.readFileSync(path.normalize(__dirname + '/.env')).toString()

  file.split("\n").map(function(line){
    var parts = line.split("=")
    var key = parts[0]
    var value = parts[1]
    if (!process.env[key]) {
      process.env[key] = value
    }
  })

}()