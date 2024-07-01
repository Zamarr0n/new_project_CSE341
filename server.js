const express = require("express");
const mongo = require('./data/database');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use('/', require('./routes'));

app.listen(port, () => {console.log(`DB is ready and Running on port ${port}`)});









