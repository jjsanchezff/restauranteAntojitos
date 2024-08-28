import { Model, DataTypes } from "sequelize";
import { con_sequelize } from "../config/conexion-Db.js";
import { Usuario } from "./usuario.js";
class Rol extends Model {
}

Rol.init({
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    }
}, {
    sequelize: con_sequelize,
    modelName: "Rol",
    tableName: "rol",
    timestamps: false
})

Rol.hasMany(Usuario, {
    foreignKey: {
    name: 'idRol',
    allowNull: false
    }
})

Usuario.belongsTo(Rol, {
    foreignKey: 'idRol'
})

export { Rol }