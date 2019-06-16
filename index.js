const mongoose = require('mongoose');

const Dishes = require('./models/dishes');


const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('connected correctly to server');

    var newDish = Dishes({
        name: 'Uthappiza',
        description: 'Test'
    });

    newDish.save()
        .then((dish) => {
            console.log('dish**', dish);

            return Dishes.find({}).exec();

        })
        .then((dishes) => {
            console.log('dishes^^^', dishes);
            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});