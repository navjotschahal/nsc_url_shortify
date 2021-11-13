const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    uid: { type: String, required: true },
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Url', urlSchema);