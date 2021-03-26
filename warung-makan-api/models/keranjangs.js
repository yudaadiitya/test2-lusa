const mongoose = require('mongoose');

const keranjangsSchema = new mongoose.Schema({
    jumlah_pemesanan: String,
    keterangan: String,
    products: {
        type: mongoose.Schema.Types.ObjectId, ref: 'products'
    }
});

module.exports = mongoose.model('keranjangs', keranjangsSchema)