/*jshint esversion: 6 */
const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost/user-cli', {useMongoClient: true});

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
};

// Update User
const updateUser = (_id, user) => {
    User.update({_id}, user).then(
        (user) => {
            console.log("User updated");
            db.close();
        }
    );
};

// Delete User
const removeUser = (_id) => {
    User.remove({_id}).then(
        (user) => {
            console.log("User removed");
            db.close();
        }
    );
};

// List all customers
const listUsers = () => {
    User.find().then((users) => {
        console.log(users);
        console.log(`${users.length} Users`);
        db.close();
    });
};


module.exports = {
    findUser,
    addUser,
    removeUser,
    updateUser,
    listUsers
};


