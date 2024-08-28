import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"

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
    timestamps: true, // Se usa timestamp en esa tabla
})

export {Plato}