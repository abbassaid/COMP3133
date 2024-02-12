const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const insertData = require('./insert-data');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://abbassaid:GeorgeBrown123@cluster0.e8qefyb.mongodb.net/Users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        // Insert all users
        insertData()
            .then(() => {
                console.log('Initial data inserted');
                startServer();
            })
            .catch(error => console.error('Error inserting initial data:', error));
    })
    .catch(err => console.error('Could not connect to MongoDB', err));

function startServer() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
}

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (ex) {
        res.status(400).send(ex.message);
    }
});
