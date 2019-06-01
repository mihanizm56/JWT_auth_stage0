require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./api/routes");
const port = process.env.SERVER_PORT || 10000;

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(port, () => {
	console.log(`Server for rest-api was started on port ${port}!`);
});
