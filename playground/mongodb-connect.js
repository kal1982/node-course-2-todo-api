// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server and error is: ' + err);
//     }
//     console.log('Connected successfully to MongoDB server');

//     db.close();
//     console.log('Database successfully closed');
// });

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server and error is: ' + err);
    }
    console.log('Connected successfully to MongoDB server');

    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({ text: 'Something to do', completed: false }, (err, result) => {
    //     if (err) {
    //        return console.log('Unable to insert Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        _id: 1,
        name: "John",
        age: 32, 
        location: "Seattle"
    }, (err, result) => {
     if (err) {
            return console.log('Unable to insert Users', err);
         }
         console.log(result.ops);
     });
    client.close();
});