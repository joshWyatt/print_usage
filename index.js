var fs = require('fs');
var fileExists = require('file-exists');

module.exports = printUsage;

function printUsage (usage) {
  if (usage) {
    console.log(usage);
    process.exit();
  }
  if (fileExists(usage = process.cwd() + '/usage.md')) {
    var rs = fs.createReadStream(usage);
    rs.pipe(process.stdout);
    rs.on('end', function() {
      process.exit();
    });
  }
  else {
    throw new Error('There is neither a usage string or usage.md file in the cwd!');
  }
}