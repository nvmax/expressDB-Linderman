const path = require('path');
const express = require('express');
const app = express();


// app get send file to public/assets/index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/index.html'));
}
);

// app get send file to public/assets/index.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets/notes.html'));
}
);

module.exports = app;