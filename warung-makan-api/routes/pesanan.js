const express = require("express");
const router = express.Router();
const Pesanan = require("../models/pesanan");

//======== GET PESANAN
router.get("/", function (req, res, next) {
  Pesanan.find({}, function (err, data) {
    res.status(200).json(data);
  });
});

//======== ADD PESANAN
router.post('/', function (req, res, next) {
    const {nama, noMeja} = req.body
    Pesanan.create({
        nama, noMeja
    }, function (err, data) {
        if (err) {
            return res.status(400).json({ message: "Failed to post pesanan!" })
        } else {
            res.status(201).json(data);
        }
    })
});

module.exports = router;