import { Router } from "express"
import { con_sequelize } from "../config/conexion-Db.js"

const bdRouter = Router()

bdRouter.post("/crear", async (req, res) => {
    await con_sequelize.sync({force: true})
    res.send("jeje")
})

export default bdRouter