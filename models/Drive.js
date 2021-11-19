const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriveSchema = new Schema({
	companyName: { type: String, required: true },
	jobTitle: { type: String, required: true },
	jobDescription: { type: String, required: false, default: "" },
	jobLocation: { type: String, required: false, default: "" },
	jobType: { type: String, required: false, default: "" },
	jobCTC: { type: Number, required: true },
	allowedBranches: {
		type: Array,
		required: false,
		default: [
			{
				department: { type: String, required: false, default: "" },
			},
		],
	},
	criteria: {
		type: Object,
		required: false,
		default: {
			tenthMarks: { type: Number, required: false, default: 0 },
			twelthMarks: { type: Number, required: false, default: 0 },
			noOfActiveBacklogs: { type: Number, required: false, default: 0 },
			noOfGaps: { type: Number, required: false, default: 0 },
			cgpa: { type: Number, required: false, default: 0 },
		},
	},
	bondLength: { type: String, required: true, default: "" },
	lastDate: { type: Date, required: false, default: "" },
	joiningDate: { type: Date, required: false, default: "" },
	testDate: { type: Date, required: false, default: "" },
	testInfo: { type: String, required: false, default: "" },
});

DriveSchema.index({ companyName: "text", jobTitle: "text" });
module.exports = mongoose.model("Drive", DriveSchema);
