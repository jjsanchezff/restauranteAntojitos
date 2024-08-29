import { Router } from "express"
import { IndexController } from "../controllers/index.controller.js"

const indexRouter = Router()

indexRouter.get("/home", IndexController.cargarHome)
indexRouter.get("/carta", IndexController.cargarCarta)
indexRouter.get("/ordenes", IndexController.cargarOrdenes)

indexRouter.get("/recibos", IndexController.cargarRecibos)

indexRouter.get("/registrar-orden", IndexController.registrarOrden)

indexRouter.get("/pedidos", IndexController.cargarPedidos)

indexRouter.post('/submit', (req, res) => {
    const { id, nombre } = req.body;
    console.log(`idPLato: ${id}, nombre: ${nombre}`);
    
    // Aquí puedes procesar los datos del formulario según tus necesidades

    // Devuelve un estado
    res.status(200).send('Formulario recibido correctamente');
});

indexRouter.post("/api/pedidos", IndexController.mostrarConsola)

indexRouter.post("/api/registrar-orden", IndexController.mostrarConsola)




export default indexRouter