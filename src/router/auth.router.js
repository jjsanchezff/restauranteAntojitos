import { Router } from "express"
import { AuthController } from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.get("/login", AuthController.cargarLogin)

authRouter.post("/auth", AuthController.auth)

authRouter.post("/register", AuthController.registrarUsuario)
authRouter.get("/registro", AuthController.registro)



export { authRouter }