const mongoose = require('mongoose');

const bestProductsSchema = new mongoose.Schema({
    nama: String,
    harga: Number,
    gambar: String,
});

module.exports = mongoose.model('bestProducts', bestProductsSchema)