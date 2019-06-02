const express = require("express");
const routes = express.Router();

// controllers
const getAllReviewsController = require("../controllers/reviews").getAllReviewsController;
const reviewsCreateController = require("../controllers/reviews").reviewsCreateController;
const reviewsDeleteController = require("../controllers/reviews").reviewsDeleteController;

// services
const tokenVerify = require("../services/modules/auth").tokenVerify;

routes.get("/reviews", getAllReviewsController);
routes.post("/reviews", tokenVerify, reviewsCreateController);
routes.delete("/reviews", tokenVerify, reviewsDeleteController);

module.exports = routes;
