const fs = require('fs');
var compress = require('zlib');

let createBackup = fs.createReadStream('student.gz')
.pipe(compress.createGuzip())
.pipe(fs.createWriteStream('student.txt'));

console.log('student file successfully backup');
console.log(createBackup);

module.exports = createBackup