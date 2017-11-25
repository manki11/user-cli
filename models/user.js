const mongoose= require('mongoose');

// define schema
const UserSchema= mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: String},
    email: {type: String}
});

// export
module.exports = mongoose.model('User', UserSchema);