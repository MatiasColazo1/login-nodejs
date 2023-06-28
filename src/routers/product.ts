import { Router } from "express";
import { deleteProducto, getProduct, getProducto, postProducto, putProducto } from "../controllers/product.controller";
import validateToken from "./validate-token";

const router = Router();

router.get("/",validateToken, getProduct);
router.get("/:id", getProducto);
router.delete("/:id", deleteProducto);
router.post("/", postProducto);
router.put("/:id", putProducto);

export default router;