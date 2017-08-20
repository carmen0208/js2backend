//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // deleteMany
    // db.collection('Todos').deleteMany({text: "Somthing to do"}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: "Somthing to do"}).then((result) => {
    //     console.log(result);
    // });
    // findOneandDelete
    // db.collection('Todos').findOneAndDelete({text: "Somthing to do"}).then((docs) => {
    //     console.log(docs);
    // });
    // db.close();
});

