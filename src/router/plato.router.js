import { Router } from "express"

import { PlatoController } from "../controllers/plato.controller.js"

const platoRouter = Router()

platoRouter.post("/platos/crear/uno", PlatoController.crearPlato)

platoRouter.post("/platos/crear/muchos", PlatoController.crearMuchosPlatos)

export default platoRouter