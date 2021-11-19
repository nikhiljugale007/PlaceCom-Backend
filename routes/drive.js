const express = require("express");
const Drive = require("../models/drive");
const driveRouter = express.Router();

driveRouter.route("/").get((req, res) => {
	Drive.find({}, (err, drives) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(drives);
		}
	});
});

driveRouter.route("/search").get(async (req, res) => {
	var companyName = req.query.companyName;
	try {
		const drives = await Drive.find(
			{ companyName: { $regex: companyName, $options: "i" } },
			{},
			query
		);
		res.json({
			status: 200,
			message: "success",
			data: drives,
		});
	} catch (err) {
		res.json({
			status: 500,
			message: err.message,
		});
	}
});

driveRouter.route("/:id").get((req, res) => {
	Drive.findById(req.params.id, (err, drive) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(drive);
		}
	});
});

driveRouter.route("/").post((req, res) => {
	let { companyName, jobTitle, jobCTC, bondLength } = req.body;
	let newDrive = new Drive(req.body);
	newDrive.save((err, drive) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(drive);
		}
	});
});

driveRouter.route("/:id").put((req, res) => {
	Drive.findById(req.params.id, (err, drive) => {
		if (err) {
			res.status(500).send(err);
		} else {
			drive.companyName = req.body();
			drive.save((err, drive) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.status(200).send(drive);
				}
			});
		}
	});
});

driveRouter.route("/:id").delete((req, res) => {
	Drive.findByIdAndRemove(req.params.id, (err, drive) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(drive);
		}
	});
});

module.exports = driveRouter;
