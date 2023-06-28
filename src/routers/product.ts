import { Router } from "express";
import { deleteProducto, getProduct, getProducto, postProducto } from "../controllers/product.controller";
import validateToken from "./validate-token";

const router = Router();

router.get("/",validateToken, getProduct);
router.get("/:id", getProducto);
router.delete("/:id", deleteProducto);
router.post("/", postProducto);

export default router;