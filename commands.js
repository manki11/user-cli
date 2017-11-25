const program = require('commander');
const {addUser, findUser} = require('./index');

program
    .version('1.0.0')
    .description('User Management System')

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('add a user')
    .action((firstname, lastname, phone, email) => {
        addUser({firstname,lastname,phone,email});
    });

program
    .command('find <name>')
    .alias('f')
    .description('find user by name')
    .action((name)=>{
        findUser(name);
    });


program.parse(process.argv);

