const express = require("express");
const router = express.Router();
const routerProduct = require("./apiProduct/products.routes")

router.use("/product", require("./apiProduct/products.routes"))

module.exports=router