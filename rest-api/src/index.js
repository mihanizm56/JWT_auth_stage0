require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("./api/services/modules/db");

const apiRouter = require("./api/routes");
const port = process.env.SERVER_PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", apiRouter);

const startServer = () => {
	app.listen(port);
	console.log("rest-api started on port", port);
};

const connectDB = () => {
	mongoose.Promise = global.Promise;

	const options = {
		useNewUrlParser: true,
	};

	mongoose.connect(process.env.DB_URL, options);
	mongoose.set("useCreateIndex", true);

	console.log("connected to rest-api db");

	return mongoose.connection;
};

connectDB().once("open", startServer);
