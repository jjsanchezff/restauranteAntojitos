import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import productoRouter from '../router/producto.router.js'
import platoRouter from '../router/plato.router.js'
import bdRouter from '../router/bd.router.js'
import pedidoRouter from '../router/pedido.router.js'



//initialization
const app = express();
dotenv.config();

//app.use(express.static('public'));

// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.json()) // Parsea las solicitudes JSON

// Rutas
app.get('/', (req, res) => {
    res.status(200).send("Cargo correctametne")
})
app.use("/api/v1", productoRouter)
app.use("/api/v1", platoRouter)
app.use("/api/v1", pedidoRouter)
app.use("/api/v1/bd/", bdRouter)


// Mensaje por defecto si no existe
app.use((req, res) => {
    res.status(404).send('¡El recurso no existe!')
})



export {app}


