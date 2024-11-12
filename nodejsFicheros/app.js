const fs = require("fs");
let stats = fs.statSync("diccionario.txt");
console.log(stats);
stats.isFile() // => true: this is an ordinary file
stats.isDirectory() // => false: it is not a directory
stats.size // file size in bytes
stats.atime // access time: Date when it was last read
stats.mtime // modification time: Date when it was last written
stats.uid // the user id of the file's owner
stats.gid // the group id of the file's owner
stats.mode.toString(8) // the file'