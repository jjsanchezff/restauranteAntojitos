import { Model, DataTypes } from "sequelize"
import { con_sequelize } from "../config/conexion-Db.js"
import { Pedido } from "./pedido.model.js"
import { Producto } from "./producto.model.js"

// class Pedido_Producto extends Model {

// }

// Pedido_Producto.init({
//     idPedido: {
//         type:DataTypes.INTEGER,
//         references: {
//             model: Pedido,
//             key: 'idPedido'
//         }

//     },
//     idProducto: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Producto,
//             key: 'idProducto'
//         }
//     }
// }, {
//     sequelize: con_sequelize,
//     modelName: "Pedido_Producto",
//     tableName: "pedido_producto",
//     timestamps: true 
// })

// export {Pedido_Producto}