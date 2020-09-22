var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.selectAll((data) => {
		var hbsObj = {burger: data};
		res.render("index", hbsObj);
	});
});

// Post Route: Add Burger
router.post("/burgers", (req, res) => {
	burger.insertOne(
		// → orm.js insertOne
		["burger_name", "devoured"],
		// add burger_name and devoured=false
		[req.body.burger_name, req.body.devoured],
		(result) => {

            res.status(200).end();
		},
	);
});

// Get burger to update NOT SURE ABOUT THIS
router.put("/burger/:id", (req, res) => {
    const condition = "id= " + req.params.id;
    burger.updateOne(
        {devoured: req.body.devoured},
        condition, (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js to use
module.exports = router;