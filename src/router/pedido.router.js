import { Router } from "express"
import { PedidoController } from "../controllers/pedido.controller.js"

const pedidoRouter = Router()

pedidoRouter.post("/pedido/crear", PedidoController.crearPedido)
pedidoRouter.get("/pedido/id/:id", PedidoController.obtenerUno)

pedidoRouter.get("/pedido", PedidoController.obtenerTodos)
 



//pedidoRouter.get("/ordenes", PedidoController.cargarPagina)


export default pedidoRouter