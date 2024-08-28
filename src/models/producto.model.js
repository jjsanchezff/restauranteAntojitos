import { Model, DataTypes } from "sequelize";
import { con_sequelize } from "../config/conexion-Db.js";

class Producto extends Model {
    
    // Método de instancia para calcular el valor total del stock
    calcularValorTotal() {
        return this.precio * this.stock;
    }
}

Producto.init({
    idProducto: {
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
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
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
    
}, {
    sequelize: con_sequelize,
    modelName: "Producto",
    tableName: "producto",
    timestamps: true, // No se usa timestamp en esa tabla
})

export {Producto}