import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
//import { Producto } from "./producto.model.js"
//import { Plato } from "./plato.model.js"
//import { Pedido_Producto } from "./producto.model.js"

class Pedido extends Model {

}

Pedido.init({
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estado: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    
    // TODO: Validar que funcione el enum (json)
    tipo: {
        type: DataTypes.ENUM('Llevar', 'Local'),
        allowNull: false,
        defaultValue: 'Local' // Valor por defecto para nuevos pedidos
    }

}, {
    sequelize: con_sequelize,
    modelName: "Pedido",
    tableName: "pedido",
    timestamps: true

})

export {Pedido}