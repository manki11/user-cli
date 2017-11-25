const mongoose= require('mongoose');
const User= require('./models/user');

mongoose.Promise= global.Promise;

//connect to db
const db= mongoose.connect('mongodb://localhost:8000/user-cli',{useMongoClient: true});