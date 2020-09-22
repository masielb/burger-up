var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.all((data) => {
		var hbsObj = { burger: data };
		res.render("index", hbsObj);
	});
});

// Post Route: Add Burger
router.post("/api/burger", (req, res) => {
	burger.insertOne(
		// → orm.js insertOne
		["burger_name", "devoured"],
		// add burger_name and devoured=false
		[req.body.burger_name, req.body.devoured],
		(result) => {

            res.redirect("/");
		},
	);
});

// Get burger to update
router.get("/api/burger/update", (req, res) => {
	burger.updateOne(req.query.id, { devoured: req.query.devoured }, (result) => {
		res.redirect("/");
	});

});

// Export routes for server.js to use
module.exports = router;