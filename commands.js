#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const {addUser, findUser, removeUser, updateUser, listUsers} = require('./index');

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

//Add User
program
    .command('add')
    .alias('a')
    .description('Add a user')
    .action(() => {
        prompt(questions).then(answers => addUser(answers));
    });

// Find User
program
    .command('find <name>')
    .alias('f')
    .description('Find user by name')
    .action((name) => {
        findUser(name);
    });

// List all user
program
    .command('list')
    .alias('l')
    .description('List all Users')
    .action(()=>{
        listUsers();
    });

//Update User
program
    .command('update <id>')
    .alias('u')
    .description('Update a user')
    .action((id) => {
        prompt(questions).then(answers => updateUser(id,answers));
    });

// Delete User
program
    .command('remove <id>')
    .alias('r')
    .description('Remove a User')
    .action(id=>{
        removeUser(id);
    });

program.parse(process.argv);

