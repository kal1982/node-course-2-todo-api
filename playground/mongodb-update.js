
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server and error is: ' + err);
    }
    console.log('Connected successfully to MongoDB server');

    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ba024b26ed67c1e2f487318')
    }, {
        $set: {
            location: 'Seattle'
        }
    }).then((result) => {
        console.log(result);
    });    
});
