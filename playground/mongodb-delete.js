
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server and error is: ' + err);
    }
    console.log('Connected successfully to MongoDB server');

    const db = client.db('TodoApp')

//    db.collection('Users').deleteMany({name: 'John'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5ba024e86ed67c1e2f48731a")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
});
});