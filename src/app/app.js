import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import productoRouter from '../router/producto.router.js'
import platoRouter from '../router/plato.router.js'
import bdRouter from '../router/bd.router.js'
import pedidoRouter from '../router/pedido.router.js'
import indexRouter from '../router/index.router.js'
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs'
import favicon from 'serve-favicon'
import bodyParser from 'body-parser'



//initialization
const app = express();
dotenv.config();

// settings
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Static files
app.use(express.static(path.join(__dirname, '../public')))
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
//app.use(express.static('public'));

// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use(express.json()) // Parsea las solicitudes JSON

// Rutas
app.get('/', (req, res) => {
    res.status(200).send("Cargo correctametne")
})

app.use("/", indexRouter)
app.use("/api/v1", productoRouter)
app.use("/api/v1", platoRouter)
app.use("/api/v1", pedidoRouter)
app.use("/api/v1/bd/", bdRouter)
// app.use("/", authRouter)
// app.use("/home", indexRouter)

// Mensaje por defecto si no existe
app.use((req, res) => {
    res.status(404).send('¡El recurso no existe!')
})



export {app}


