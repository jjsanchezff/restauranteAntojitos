import { Producto } from '../models/producto.model.js'
export class ProductoController {
    static async getAll(req, res) {

        // const prod = await Producto.findAll({})

        // console.log(prod)



        
        // Producto.findAll({attributes: ['nombre', 'precio', 'stock', 'createdAt']})
        // .then(prod => {
        //     // FORMATO JSON
        //     // const resultados = JSON.stringify(prod)
        //     // console.table(resultados)
        //     const datos = prod.map(prod => prod.dataValues);
        //     console.table(datos);
        // })
        // .catch(error => {
        //     console.log(error)
        // }
        // )


        await Producto.findAll({ attributes: ['nombre', 'precio', 'stock', 'createdAt'] })
        .then(prod => {
            const datos = prod.map(prod => {
                const { nombre, precio, stock, createdAt } = prod.dataValues;
                return {
                    nombre,
                    precio,
                    stock,
                    createdAt: new Date(createdAt).toLocaleString() // Formatea la fecha
                };
            });
            console.table(datos);
        })
        .catch(error => {
            console.log(error);
        });
    
        res.send("Router de productos") // respuesta del controlador o lo que renderiza
    }

    static async getAllJson(req, res) {
        const resultado = await Producto.findAll()
        //const resultados = JSON.stringify(prod)
        console.log(JSON.stringify(resultado))
        res.json(resultado)
        // const prod = await Producto.findAll({})

        // console.log(prod)



        
        // Producto.findAll({attributes: ['nombre', 'precio', 'stock', 'createdAt']})
        // .then(prod => {
        //     // FORMATO JSON
        //     // const resultados = JSON.stringify(prod)
        //     // console.table(resultados)
        //     const datos = prod.map(prod => prod.dataValues);
        //     console.table(datos);
        // })
        // .catch(error => {
        //     console.log(error)
        // }
        // )
    }


    
    static async crearProductos(req, res) {
        const datos = req.body;
        console.log(datos);

        try {
            const productos = await Producto.bulkCreate(datos.productos);
            res.status(200).json(productos);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error al crear los productos");
        }
    }
    
    static async crearProducto(req, res) {
        const datos = req.body
        console.log(datos)
        try {
            await Producto.create({
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                precio: datos.precio,
                stock: datos.stock
            });
            res.status(200).send("Todo correcto");
        } catch (error) {
            console.log(error.message);
            res.status(400).send(error.message);
        }
    }

    static async crearProductoYObtenerId(req, res) {
        const datos = req.body
        console.log(datos)
        try {
            const nuevoProducto = await Producto.build({
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                precio: datos.precio,
                stock: datos.stock
            });
            await nuevoProducto.save();
            console.log("Id:" + nuevoProducto.idProducto);


            // const nuevoProducto = await Producto.create({
            //     nombre: datos.nombre,
            //     descripcion: datos.descripcion,
            //     precio: datos.precio,
            //     stock: datos.stock
            // });
            res.status(200).send("Todo correcto");
        } catch (error) {
            console.log(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getOne(req, res) {
        const idProd = req.params.id

        const prod = await Producto.findOne({
            where: {
                idProducto: idProd
            }
        })

        console.log(prod)
        res.send("Router de productos")
    }

    /**
     * Calcula el precio total de un producto.
     * @param {Object} req - El objeto de solicitud.
     * @param {Object} res - El objeto de respuesta.
     * @returns {void}
     */
    static async calcularPrecio(req, res) {
        const idProd = req.params.id
        const prod = await Producto.findByPk(idProd)

        if(!prod) {
            res.status(404).send("No se encontró el producto")
            return
        }
        console.log(prod.dataValues)

        const precioTotal = prod.calcularValorTotal()
        console.log(precioTotal)
        res.send("Router de productos")
    }
    static async crearMuchosProductos(req, res) {
        const datos = req.body
        console.log(datos.productos)
        // if (!datos || !Array.isArray(datos) || datos.length === 0) {
        //     return res.status(400).send("Datos inválidos: se requiere un array de platos.");
        // }

        try {
            const platos = await Producto.bulkCreate(datos.productos)
            res.status(200).send("Se crearon los productos correctamente")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error al crear los productos")
        }
    }

}