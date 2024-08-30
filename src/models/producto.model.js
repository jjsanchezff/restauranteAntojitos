import { Model, DataTypes } from "sequelize";
import { con_sequelize } from "../config/conexion-Db.js";
import { Pedido } from "./pedido.model.js";
//import { FOREIGNKEYS } from "sequelize/lib/query-types";
//import { Pedido_Producto } from './pedido_producto.model.js'

class Producto extends Model {
}

Producto.init({
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.FLOAT(6,2),
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    
}, {
    sequelize: con_sequelize,
    modelName: "Producto",
    tableName: "producto",
    timestamps: false, // No se usa timestamp en esa tabla
})


class Pedido_Producto extends Model {
    calcularSubTotal() {
        return this.precioUnitario * this.cantidad;
    }
}

Pedido_Producto.init({
    idPedido: {
        type:DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'idPedido'
        }

    },
    idProducto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'idProducto'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    precioUnitario: {
        type: DataTypes.FLOAT(6,2),
        allowNull: false
    }
}, {
    sequelize: con_sequelize,
    modelName: "Pedido_Producto",
    tableName: "pedido_producto",
    timestamps: true 
})

Pedido.belongsToMany(Producto, {
    through: {
        model: Pedido_Producto,
        unique: false, 
    },
    foreignKey: 'idPedido'
});

Producto.belongsToMany(Pedido, {
    through: {
        model: Pedido_Producto,
        unique: false, 
    },
    foreignKey: 'idProducto'
});



export {Producto, Pedido_Producto}