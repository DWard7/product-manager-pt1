const { message, create } = require("../controllers/product.controller");

const express = require("express");
const productRouter = express.Router();

productRouter.route("/").get(message);

productRouter.route("/product").post(create);
module.exports = productRouter;
