const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    nama: String,
    harga: Number,
    gambar: String,
});

module.exports = mongoose.model('products', productsSchema)