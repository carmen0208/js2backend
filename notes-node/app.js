console.log("starting app.");

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
var user = os.userInfo();
var res = notes.addNote();
var total = notes.add(2,8);
console.log(res);
console.log(user);
console.log(total);
//fs.appendFile('greetings.txt', `Hello ${user.username}, You are ${notes.age} \n`, function(err){
//  if(err) {
//    console.log('Unable to write to file');
//  }
//});

console.log(_.isString(true));
console.log(_.isString('Carmen'));
var filterarray = _.uniq(['Carmen', 'carmen',1,5,8,3,5]);
console.log(filterarray);
