const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
//import routes
const authRoutes = require("./routes/auth");
const driveRoutes = require("./routes/drive");
const { db } = require("./models/User");
//app
const app = express();
// db
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB Connected"));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use("/auth", authRoutes);
app.use("/drive", driveRoutes);
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
