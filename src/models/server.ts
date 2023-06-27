import express from "express";
import routerProducts from "../routers/product";
import routeUser from "../routers/user";
import { Product } from "./product";
import { User } from "./user";
import cors from "cors";

export class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicacion esta funcionando en el puerto: " + this.port);
        })
    }

    routes() {
        this.app.use("/api/products", routerProducts);
        this.app.use("/api/users", routeUser);
    }

    midlewares(){
        // Parseo body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Product.sync();
            await User.sync();
            console.log("Conneccion a la base de datos con exito");
        } catch (error) {
            console.error("Error en la coneccion de la base de datos: ", error);
        }
    }
}

export default Server;