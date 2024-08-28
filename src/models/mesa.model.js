import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
import { Pedido } from "./pedido.model.js"

class Mesa extends Model {

}

Mesa.init({
    idMesa: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        //autoIncrement: true
    },
    numero:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(10),
        allowNull: true
    }
    
}, {
    sequelize: con_sequelize,
    modelName: "Mesa",
    tableName: "mesa",
    timestamps: false
})





// Crea una relacion basica en sql de uno a muchos
Mesa.hasMany(Pedido, {
    foreignKey: {
        name: 'idMesa',
        allowNull: false
    }
})

Pedido.belongsTo(Mesa, {
    foreignKey: 'idMesa',
    //allowNull: false
})

/*
    * NOTA IMPORTANTE: Si se define cual es el nombre de la clave foránea que hará
    * referencia a la PK, entonces tambien se debe definir el nombre tanto en 
    * hasMany como en belongsTo para evitar la generación de dos llaves con nombres 
    * distintos apuntando a la PK. Esto se debe a que por defecto le asigna un nombre
    * distinto sequalize
*/

export {Mesa}