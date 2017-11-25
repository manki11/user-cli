## User CLI

#### Command line interface that can CRUD on a simple users database

##### Features of user-cli
1. Add users(firstname, lastname, phone, email)
2. Find users with thier names
3. Update user
4. Remove user
5. List all users

#### To run project

Clone this repository on your local machine. Make suer you have npm and mongo db installed on your machine.

Start mongodb
```bash
mongod
```

Install dependencies
```bash
npm install
```

Link project
```bash
npm link
```

##### Commands of user-cli

Add user:
```bash
user-cli add|a
```

Find user:
```bash
user-cli find|f <name>
```

Update user:
```bash
user-cli update|u <id>
```

Remove user:
```bash
user-cli remove|r <id>
```

List all users:
```bash
user-cli list|l 
```
