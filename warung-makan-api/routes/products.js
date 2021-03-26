const express = require("express");
const router = express.Router();
const Products = require("../models/products");

//======== GET PRODUCTS
router.get("/", function (req, res, next) {
  Products.find({}, function (err, data) {
    res.status(200).json(data);
  });
});

//======== GET PRODUCTS BY ID
router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    Products.find({ _id: _id })
        .exec(function (err, data) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                res.status(200).json(data);
            }
        })
})

//======== ADD PRODUCTS
router.post('/', function (req, res, next) {
    const {nama, harga, gambar} = req.body
    Products.create({
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