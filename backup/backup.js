const fs = require('fs');
var compress = require('zlib');


let createBackup = fs.createReadStream('student.txt', 'utf8')
.pipe(compress.createGzip())
.pipe(fs.createWriteStream('student.gz', 'utf8'));

// console.log('student file successfully backup');
//console.log(createBackup);

module.exports = createBackup