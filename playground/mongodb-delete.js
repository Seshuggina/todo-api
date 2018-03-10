//onst MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // Delete Many
    // db.collection('Todos').deleteMany({ text: 'Something to do' }).then((result) => {
    //     console.log(result);
    // });

    // Delete One
    // db.collection('Todos').deleteOne({ text: 'Hi There' }).then((result) => {
    //     console.log(result);
    // });

    // DeleteOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });


    db.close();
});