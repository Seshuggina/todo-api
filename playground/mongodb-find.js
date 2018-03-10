//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect MongoDB Server');
    }
    console.log('Connected to Server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5aa3ba631424c51ee0671a82')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to Fetch todos');
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to Fetch todos');
    });

    //db.close();
});