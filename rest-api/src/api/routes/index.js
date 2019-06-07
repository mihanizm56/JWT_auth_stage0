// config
const express = require("express");
const routes = express.Router();

// controllers
const { getAllReviewsController, reviewsCreateController, reviewsDeleteController } = require("../controllers/reviews");

// services
const { tokenVerify } = require("../services/modules/auth");

// routes
routes.get("/reviews", getAllReviewsController);
routes.post("/reviews", tokenVerify, reviewsCreateController);
routes.delete("/reviews", tokenVerify, reviewsDeleteController);

module.exports = routes;
