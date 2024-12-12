const express = require('express');
const session = require('express-session');
const bodyParser = require ('body-parser');
const path = require('path');
const mysql = require('mysql2/promise');
const routes = require('./routes/index'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your secret here',
    resave: false,
    saveUninitialized: true,
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});


// Use routes from the routes/index.js file
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname ,'public','homepage.html'));
});
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});