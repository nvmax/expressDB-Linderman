const express = require('express');
const fs = require('fs');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use public/assets
app.use(express.static('public/assets,'));
require('./routes/html')(app);
require('./routes/api')(app);













app.listen(port, () => {
  console.log(`listening on port ${port}`);
}).on('error', err => {
  console.log(err);
});
