import { Router } from "express"
import { IndexController } from "../controllers/index.controller.js"

const indexRouter = Router()

indexRouter.get("/home", IndexController.cargarHome)
indexRouter.get("/carta", IndexController.cargarCarta)
indexRouter.get("/ordenes", IndexController.cargarOrdenes)

indexRouter.get("/recibos", IndexController.cargarRecibos)

indexRouter.get("/registrar-orden", IndexController.registrarOrden)

export default indexRouter