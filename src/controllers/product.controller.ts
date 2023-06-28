import { Request, Response} from "express";
import { Product } from "../models/product";

export const getProduct = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();

    res.json(listProducts)
}

export const getProducto = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();
    
    res.json({
        msg: "get producto",
        id: req.params.id
    })
}

    export const deleteProducto = async (req: Request, res: Response) => {
        const listProducts = await Product.findAll();
        
        res.json({
            msg: "delete producto",
            id: req.params.id
        })
}

export const postProducto = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll();
    const { body } = req;

    res.json({
        msg: "post producto",
        body
    })
}