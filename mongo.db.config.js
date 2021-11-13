const mongoose = require('mongoose');

const staticData = require('./static-data/static-data.json');

mongoose.connect(staticData.mongoDbConnection.uris, staticData.mongoDbConnection.options.ConnectionOptions)
    .then(() => {
        console.log(staticData.mongoDbConnection.messages.sucess + staticData.strFormater.newLine + staticData.mongoDbConnection.messages.sucessSarcasm);
    }).catch(() => {
        console.log(staticData.mongoDbConnection.messages.failed + staticData.strFormater.newLine + staticData.mongoDbConnection.messages.failedSarcasm);
    });

const connection = mongoose.connection

module.exports = connection