const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dbConnection = require('./mongo.db.config');
const shortifyRoutes = require('./routes/shortify.routes');
const redirectRoutes = require('./routes/redirect.routes');

dbConnection.once('open', () => console.log('DB Connected!'))
dbConnection.on('error', () => console.log('Error'))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
    console.log(req.protocol+"://"+req.headers.host);
});

app.use("/", redirectRoutes);
app.use("/api/shortify/", shortifyRoutes);
app.use("/api/redirect/", redirectRoutes);

module.exports = app;