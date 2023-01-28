const { message, create, findAll, findOne } = require("../controllers/product.controller");

const express = require("express");
const productRouter = express.Router();

productRouter.route("/").get(message);

productRouter.route("/product").post(create).get(findAll);

productRouter.route("/product/:id").get(findOne);


module.exports = productRouter;
