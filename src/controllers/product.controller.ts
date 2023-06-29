import { Request, Response } from "express";
import { Product } from "../models/product";

export const getProduct = async (req: Request, res: Response) => {

    const listProducts = await Product.findAll();

    res.json(listProducts)
}

export const getProducto = async (req: Request, res: Response) => {
    const { id } = req.params
    const producto = await Product.findByPk(id);

    if (producto) {
        res.json(producto)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        })
    }
}

export const deleteProducto = async (req: Request, res: Response) => {
    const { id } = req.params
    const producto = await Product.findByPk(id);

    if (!producto) {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        })
    } else {
        await producto.destroy();
        res.json({
            msg: "El producto fue eliminado con exito"
        })
    }
}

export const postProducto = async (req: Request, res: Response) => {
    const { body } = req;
 
    try {
        await Product.create(body);
        res.json({
            msg: "El producto fue agregado con exito!",
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Ups ocurrio un error",
        })
    }

}

export const putProducto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const producto = await Product.findByPk(id);

        if(producto) {
            await producto.update(body);
            res.json({
                 msg: "El producto fue actualizado con exito"
            })
         } else {
             res.status(404).json({
                 msg: `No existe un producto con el id: ${id}`
             })
         }

    } catch (error) {
        console.log(error)
        res.json({
            msg: "Ups ocurrio un error",
        })
    }

    
}