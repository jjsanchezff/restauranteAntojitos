import { Router } from "express"
import { con_sequelize } from "../config/conexion-Db.js"
import {Mesa} from "../models/mesa.model.js"
import { Pedido } from "../models/pedido.model.js"
import { Rol } from "../models/rol.js"
import { Usuario } from "../models/usuario.js"

const bdRouter = Router()

bdRouter.post("/crear", async (req, res) => {
    await con_sequelize.sync({force: true})
    await con_sequelize.query('ALTER TABLE producto AUTO_INCREMENT = 100')
    res.send("jeje")
})

export default bdRouter