import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
import { Rol } from "./rol.js"


class Usuario extends Model {
}

Usuario.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize: con_sequelize,
    modelName: "Usuario",
    tableName: "usuario",
    timestamps: true
})

export {Usuario}