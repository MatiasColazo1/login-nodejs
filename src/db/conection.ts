import { Sequelize } from "sequelize";

const sequelize = new Sequelize('rrhh', 'root', 'password', {
    host:"localhost",
    dialect: "mysql"
});

export default sequelize;