"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProducto = exports.postProducto = exports.deleteProducto = exports.getProducto = exports.getProduct = void 0;
const product_1 = require("../models/product");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.Product.findAll();
    res.json(listProducts);
});
exports.getProduct = getProduct;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield product_1.Product.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        });
    }
});
exports.getProducto = getProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield product_1.Product.findByPk(id);
    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        });
    }
    else {
        yield producto.destroy();
        res.json({
            msg: "El producto fue eliminado con exito"
        });
    }
});
exports.deleteProducto = deleteProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield product_1.Product.create(body);
    try {
        yield product_1.Product.create(body);
        res.json({
            msg: "El producto fue agregado con exito!",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ups ocurrio un error",
        });
    }
});
exports.postProducto = postProducto;
const putProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const producto = yield product_1.Product.findByPk(id);
        if (producto) {
            yield producto.update(body);
            res.json({
                msg: "El producto fue actualizado con exito"
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con el id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ups ocurrio un error",
        });
    }
});
exports.putProducto = putProducto;
