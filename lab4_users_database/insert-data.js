const fs = require('fs');
const mongoose = require('mongoose');
const User = require('./user');

async function insertData() {
    try {
        // Read data from file
        const data = fs.readFileSync('./UsersData.json', 'utf8');
        const users = JSON.parse(data);

        // Insert data into database
        await User.insertMany(users);
        console.log('Data inserted');
    } catch (error) {
        console.error(error);
    }
}

module.exports = insertData;