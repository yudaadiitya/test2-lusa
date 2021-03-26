const express = require("express");
const router = express.Router();
const Keranjangs = require("../models/keranjangs");

//======== GET KERANJANG
router.get("/", function (req, res, next) {
  Keranjangs.find({}, function (err, data) {
    res.status(200).json(data);
  });
});

//======== ADD KERANJANG
router.post('/', function (req, res, next) {
    const {jumlah_pemesanan, keterangan, products, nama, harga, gambar} = req.body
    Keranjangs.create({
        jumlah_pemesanan,keterangan, products, nama, harga, gambar
    }, function (err, data) {
        if (err) {
            return res.status(400).json({ message: "Failed to post keranjang" })
        } else {
            res.status(201).json(data);
        }
    })
});

//======== DELETE KERANJANG
router.delete('/:_id', function (req, res, next) {
    Keranjangs.findByIdAndRemove(req.params._id, function (err, data) {
        res.status(201).json(data);
    })
});


module.exports = router;