const express = require("express");
const routes = express.Router();

// controllers
const loginController = require("../controllers/users").loginController;
const loginTESTController = require("../controllers/users").loginTESTController;
const getSecretController = require("../controllers/users").getSecretController;
const authController = require("../controllers/users").authController;
const refreshController = require("../controllers/users").refreshController;

// services
const tokenVerify = require("../services/modules/auth/index.js").tokenVerify;

// routes
routes.post("/login", loginController);
routes.get("/login", loginTESTController); /// TODO remove
routes.post("/authentificate", authController);
routes.post("/refresh", tokenVerify, refreshController);

routes.get("/secret", getSecretController);

module.exports = routes;
