//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// const user = {name: 'Carmen liu', age : '35'};
// //destructure name from user
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Carmen Liu',
        age: '35',
        location: 'Auckland, Mt Eden'
    },(err, result) => {
        if(err) {
            return console.log('Unable to insert todo', err);
        }
        
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id));
        
    });
    db.close();
});

