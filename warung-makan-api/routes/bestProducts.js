const express = require("express");
const router = express.Router();
const bestProducts = require("../models/bestProducts");

// get bestProduct
router.get("/", function (req, res, next) {
  bestProducts.find({}, function (err, data) {
    res.status(200).json(data);
  });
});

// get bestProduct by id
router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    bestProducts.find({ _id: _id })
        .exec(function (err, data) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                res.status(200).json(data);
            }
        })
})

// post bestProduct
router.post('/', function (req, res, next) {
    const {nama, harga, gambar} = req.body
    bestProducts.create({
        nama, harga, gambar
    }, function (err, data) {
        if (err) {
            return res.status(400).json({ message: "Failed to post the video!" })
        } else {
            res.status(201).json(data);
        }
    })
});

module.exports = router;