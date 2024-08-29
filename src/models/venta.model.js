import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
import { Pedido } from "./pedido.model.js"

class Venta extends Model {

}

Venta.init({
    idVenta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    montoTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    MetodoPago: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
}, {
    sequelize: con_sequelize,
    modelName: "Venta",
    tableName: "venta",
    timestamps: true
})

Pedido.hasOne(Venta, {
    foreignKey: {
        name: 'idPedido',
        allowNull: false
    }
})

Venta.belongsTo(Pedido, {
    foreignKey: 'idPedido'
})

export { Venta }