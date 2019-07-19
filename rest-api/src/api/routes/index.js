// config
const express = require("express");
const routes = express.Router();

// controllers
const { getAllReviewsController, reviewsCreateController } = require("../controllers/reviews");

// services
const { tokenVerify } = require("../services/modules/auth");

// routes
routes.get("/reviews", getAllReviewsController);
routes.post("/reviews", tokenVerify, reviewsCreateController);

module.exports = routes;
