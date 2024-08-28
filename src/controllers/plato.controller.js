import { Plato } from "../models/plato.model.js"

export class PlatoController {
    static async crearPlato(req, res) {
        //await Plato.sync({alter: true})
        const datos = req.body
        console.log(datos)

        await Plato.create({
            nombre: datos.nombre,
            descripcion: datos.descripcion,
            categoria: datos.categoria,
            campo: datos.campo,
            precio: datos.precio,
            stock: datos.stock,
            estado: datos.estado
        })


        res.status(200).send("Se creo el plato correctamente")
    }
}