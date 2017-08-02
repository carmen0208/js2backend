console.log("starting app.");

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
var res = notes.addNote();
console.log(res);

var command = process.argv[2];
console.log(process.argv);

console.log('Command', command);
if(command ==='add') {
  console.log('Adding new note'); 
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'remove') {
  console.log('Removing note');
} else if (command === 'read'){
   console.log('Reading note');
} else {
  console.log('Command not recognized');
}
