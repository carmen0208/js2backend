//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
    // db.collection('Todos').find({_id: new ObjectID('5999f7de97234b0243516cda')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count ${count}`);
    //     // console.log(JSON.stringify(count, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })
    db.collection('Users').find({
        name: "Carmen Liu"
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    })
    db.close();
});

