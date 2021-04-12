//Import the express module
const express = require('express');

//Import the path module
const path = require('path');

//Declare a variable to use Express
const app = express();

//Pointing app to reference static files in public folder. 
app.use(express.static(path.join(__dirname, 'views')));

//Declare a variable to hold your port and run your server. 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
 