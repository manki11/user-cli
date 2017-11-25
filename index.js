/*jshint esversion: 6 */
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:8000/user-cli', {useMongoClient: true});

//Add user
const addUser = (user) => {
    User.create(user).then(user => {
        console.log("User Created");
        db.close();
    });
};

//Find User
const findUser = (name) => {
    const search = new RegExp(name, 'i');
    User.find({$or: [{firstname: search}, {lastname: search}]}).then(
        user => {
            console.log(user);
            console.log(`${user.length} matches`);
            db.close();
        }
    );
}

module.exports={
    findUser,
    addUser
};


