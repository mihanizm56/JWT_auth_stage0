// add the config of .env variables
require("dotenv").config();

// add the main libs
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");

// add the db event listeners
require("./api/services/modules/db");

// add the main router
const authRouter = require("./api/routes");

// define the middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/auth", authRouter);

// func to start the server
// define the ports
const port = process.env.PORT || 8080;
const host = "0.0.0.0";
// const mongooseUrl = process.env.DB_URL;
const mongooseUrl = process.env.DB_URL_LOCAL;

// func to start the server
const startServer = serverPort =>
	new Promise((resolve, reject) => {
		try {
			server.listen(serverPort, host, () => {
				resolve(server);
			});
		} catch (error) {
			reject(error);
		}
	});

// func to start the db connection
const connectDB = () => {
	mongoose.Promise = global.Promise;

	const options = {
		useNewUrlParser: true,
		useFindAndModify: false,
	};

	mongoose.connect(mongooseUrl, options);
	mongoose.set("useCreateIndex", true);

	console.log("connected to mongo db");

	return mongoose.connection;
};

// func to start the whole rest-api server
connectDB().once("open", () => {
	startServer(port)
		.then(server => {
			console.log("app started on port", port);
		})
		.catch(error => console.log("error during server start", error));
});
