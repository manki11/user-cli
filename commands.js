/*jshint esversion: 6 */
const program = require('commander');
const {prompt} = require('inquirer');
const {addUser, findUser} = require('./index');

//User Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'User firstname:'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'User lastname:'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'User phone:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'User email:'
    }
];

program
    .version('1.0.0')
    .description('User Management System');

// With inquirer
program
    .command('add')
    .alias('a')
    .description('Add a user')
    .action(() => {
        prompt(questions).then(answers => addUser(answers));
    });

program
    .command('find <name>')
    .alias('f')
    .description('find user by name')
    .action((name) => {
        findUser(name);
    });


program.parse(process.argv);

