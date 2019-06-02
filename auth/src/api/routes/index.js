// config
const express = require("express");
const routes = express.Router();

// controllers
const { loginController, loginTESTController } = require("../controllers/login");
const { getPublicKeyController } = require("../controllers/public-key-sender");
const { authController } = require("../controllers/auth");
const { refreshController } = require("../controllers/refresh");

// services
const { tokenVerify } = require("../services/modules/tokens");

// routes
routes.post("/login", loginController);
routes.get("/login", loginTESTController); /// TODO remove
routes.post("/authentificate", authController);
routes.post("/refresh", tokenVerify, refreshController);

routes.get("/public", getPublicKeyController);

module.exports = routes;
