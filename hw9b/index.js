//Import the express module
const express = require('express');

//Import the path module
const path = require('path');

//Declare a variable to use Express
const app = express();


//Routes
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/ex1', (req, res) => {
    res.sendFile(`${__dirname}/views/ex1.html`);
});

app.get('/ex2', (req, res) => {
    res.sendFile(`${__dirname}/views/ex2.html`);
});

app.get('/ex3', (req, res) => {
    res.sendFile(`${__dirname}/views/ex3.html`);
});

//Use Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'css')));




//Declare a variable to hold your port and run your server. 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 