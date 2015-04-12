var fs = require('fs');
var fileExists = require('file-exists');

module.exports = printUsage;

function printUsage (pathToUsage) {
  if (pathToUsage && fs.lstatSync(pathToUsage).isFile()) {
    var rs = fs.createReadStream(pathToUsage);
    rs.pipe(process.stdout);
    rs.on('end', function() {
      process.exit();
    });
  } else {
    throw new Error('Expected path to usage.md');
  }
}