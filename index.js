var fs = require('fs');
var fileExists = require('file-exists');

module.exports = printUsage;

function printUsage (pathToUsage) {
  if (pathToUsage && fs.lstatSync(path_string).isFile()) {
    var rs = fs.createReadStream(usage);
    rs.pipe(process.stdout);
    rs.on('end', function() {
      process.exit();
    });
  } else {
    throw new Error('Expected path to usage.md');
  }
}