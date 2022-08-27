const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// sets api and htm to the routes folder and files
const api = require('./routes/api');
const html = require('./routes/html');
// sets public folder to static 
app.use(express.static('public'));
// method for rendering the notes.html page
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use api and html routes in the app
app.use('/api', api);
app.use('/', html);
// listen on the port
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
});

