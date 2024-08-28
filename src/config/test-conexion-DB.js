import { con_sequelize } from "./conexion-Db.js";

async function testConexion() {
    try {
        await con_sequelize.authenticate()
        console.log("Conexion exitosa a la BD")
    } catch (error) {
        console.error("Conexion mala", error)
    }
}

console.log("dfsafds")
testConexion()