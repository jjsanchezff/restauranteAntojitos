import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"

class Whitelist extends Model {

}

Whitelist.init({
    idWhitelist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize: con_sequelize,
    modelName: "Whitelist",
    tableName: "whitelist",
    timestamps: true
})

export { Whitelist }