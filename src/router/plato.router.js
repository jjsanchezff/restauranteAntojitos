import { Router } from "express"
import { Plato } from "../models/plato.model.js"

import { PlatoController } from "../controllers/plato.controller.js"

const platoRouter = Router()

platoRouter.post("/platos", PlatoController.crearPlato)

export default platoRouter