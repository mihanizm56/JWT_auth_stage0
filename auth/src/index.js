require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./api/routes");
const port = process.env.SERVER_PORT || 10000;

app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.listen(port, () => {
	console.log(`Server for authorisation was started on port ${port}!`);
});
