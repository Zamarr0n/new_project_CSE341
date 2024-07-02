const express = require("express");
const mongo = require('./data/database');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    )
    res.setHeader('Access-Controller-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));

app.listen(port, () => {console.log(`DB is ready and Running on port ${port}`)});









