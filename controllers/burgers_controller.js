const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(err, data) {
        if (err) {
            return res.status(500).end();
        };
        res.json(data);
    });
});

router.post("/", function(req, res) {
    burger.insertOne(burger_name, devoured, function(err) {
        if (err) {
            return res.status(500).end();
        };
        res.send();
    });
});

router.put("/:id", function(req, res) {
    burger.updateOne(req.params.id, function(err) {
        if (err) {
            return res.status(500).end();
        };
        res.send();
    });
})

module.exports = router;