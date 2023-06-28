"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get("/", validate_token_1.default, product_controller_1.getProduct);
router.get("/:id", product_controller_1.getProducto);
router.delete("/:id", product_controller_1.deleteProducto);
router.post("/", product_controller_1.postProducto);
router.put("/:id", product_controller_1.putProducto);
exports.default = router;
