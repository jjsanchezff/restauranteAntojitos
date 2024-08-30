import { Router } from "express"
import { AuthController } from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.get("/login", AuthController.cargarLogin)
authRouter.get("/registro", AuthController.registro)

authRouter.post("/auth", AuthController.logearUsuario)
authRouter.post("/register", AuthController.registrarUsuario)

authRouter.get("/home", AuthController.cargaHome)

export { authRouter }