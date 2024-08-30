import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
import { Pedido } from "./pedido.model.js";

class Plato extends Model {
    // Método de instancia para calcular el valor total del stock
    calcularValorTotal() {
        return this.precio * this.stock;
    }
}

Plato.init({
    idPLato: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING(20),
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
    modelName: "Plato",
    tableName: "plato",
    timestamps: false, // Se usa timestamp en esa tabla
})

class Pedido_Plato extends Model {
    calcularSubTotal() {
        return this.precioUnitario * this.cantidad;
    }
}

Pedido_Plato.init({
    idPedido: {
        type:DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'idPedido'
        }

    },
    idPlato: {
        type: DataTypes.INTEGER,
        references: {
            model: Plato,
            key: 'idPlato'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    precioUnitario: {
        type: DataTypes.FLOAT(6,2),
        allowNull: true
    }
}, {
    sequelize: con_sequelize,
    modelName: "Pedido_Plato",
    tableName: "pedido_plato",
    timestamps: true
})

Pedido.belongsToMany(Plato, {
    through: {
        model: Pedido_Plato,
        unique: false
    },
    foreignKey: 'idPedido'
})

Plato.belongsToMany(Pedido, {
    through: {
        model: Pedido_Plato,
        unique: false
    },
    foreignKey: 'idPlato'
})

export {Plato, Pedido_Plato}