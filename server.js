const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3001;
// need to remake these functions to use the new data structure
const db = require('./db/db.json');
const api = require('./routes/api');
const html = require('./routes/html');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use public/assets
app.use(express.static('public'));
// use api routes
app.use('/api', api);
// use html routes
app.use('/', html);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
}).on('error', err => {
  console.log(err);
});


