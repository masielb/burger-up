var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
	burger.selectAll((data) => {
		var hbsObject = {burger: data};
		res.render("index", hbsObject);
	});
});

// Post Route: Add Burger
router.post("/api/burgers", (req, res) => {
	burger.insertOne("burger_name", req.body.burger_name, (result) => {		
		res.status(200).end();
	});
});

// Get burger to update NOT SURE ABOUT THIS
router.put("/api/burger/:id", (req, res) => {
	const condition = "id= " + req.params.id;
	const col = "devoured= " + req.params.devoured;

	console.log("condition", condition);
	console.log(col);

    burger.updateOne(col, condition, (result) => {
		if (result.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(200).end();
        }
    );
});

// Export routes for server.js to use
module.exports = router;