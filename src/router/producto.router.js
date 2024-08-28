import { Router } from "express";
import { ProductoController} from "../controllers/producto.controller.js"


const productoRouter = Router()

//const productos = new Producto()

// Obtener todos los productos
productoRouter.get("/productos", ProductoController.getAll)
//productoRouter.get("/productos/js", ProductoController.getAllJson)
productoRouter.get("/productos/uno/:id", ProductoController.getOne)
productoRouter.get("/productos/:id", ProductoController.calcularPrecio)

// Obtener un producto
productoRouter.get("/productos", (req, res) => {
    res.send("Router de productos")
})


// Crear un producto
productoRouter.post("/productos", ProductoController.crearProducto)
productoRouter.post("/productos/muchos", ProductoController.crearProductos) // Crear muchos productos


// Reescribe un producto
productoRouter.put("/productos", (req, res) => {
    res.send("Router de productos")
})

// Eliminar un producto
productoRouter.delete("/productos", (req, res) => {
    res.send("Router de productos")
})

export default productoRouter