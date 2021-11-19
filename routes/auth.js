const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { signup, signin, allusers } = require("../controllers/auth");
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/allusers", allusers);

router.get("/allusers/:id", (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(user);
		}
	});
});

router.patch("/allusers/:id", (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(user);
		}
	});
});

module.exports = router;
