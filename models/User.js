// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// let userSchema = new Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		email: {
// 			type: String,
// 			required: true,
// 		},
// 		password: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	{
// 		timestamps: true,
// 		collection: "users",
// 	}
// );
// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: { type: String, required: false },
		prn: { type: Number, required: false, default: 1819000212 },
		department: { type: String, required: false, default: "" },
		email: { type: String, required: true },
		password: { type: String, required: true },
		class: { type: Number, required: false, default: 2022 },
		cgpa: { type: Number, required: false, default: 0 },
		tenthMarks: { type: Number, required: false, default: 0 },
		twelthMarks: { type: Number, required: false, default: 0 },
		diplomaMarks: { type: Number, required: false, default: 0 },
		noOfActiveBacklogs: { type: Number, required: false, default: 0 },
		noOfGaps: { type: Number, required: false, default: 0 },
		city: { type: String, required: false, default: "" },
		state: { type: String, required: false, default: "" },
		isPlaced: { type: Boolean, required: false, default: false },
		companyDetails: { type: [{}], required: false },
	},
	{
		timestamps: true,
		collection: "users",
	}
);

module.exports = mongoose.model("User", UserSchema);
