const mongoose = require('mongoose');

const pesananSchema = new mongoose.Schema({
    nama: String,
    noMeja: String,
});

module.exports = mongoose.model('pesanan', pesananSchema)