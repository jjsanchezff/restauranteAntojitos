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

    // static async crearMuchosPlatos(req, res) {
    //     console.log("Ingresa a crear muchos platos")
    //     const datos = req.body
    //     console.log(datos)
    //     await Plato.bulkCreate(datos.platos)
    //     res.status(200).send("Se crearon los platos correctamente")
    // }

    // static async crearMuchosPlatos(req, res) {
    //     const datos = req.body
    //     console.log(datos)

    //     try {
    //         await Plato.bulkCreate(datos.platos)
    //         res.status(200).send("Se crearon los platos correctamente")
    //     } catch (error) {
    //         console.log(error)
    //         res.status(500).send("Error al crear los platos")
    //     }
    // }
    static async crearMuchosPlatos(req, res) {
        const datos = req.body
        console.log(datos.platos)
        // if (!datos || !Array.isArray(datos) || datos.length === 0) {
        //     return res.status(400).send("Datos inválidos: se requiere un array de platos.");
        // }
        try {
            const platos = await Plato.bulkCreate(datos.platos)
            res.status(200).send("Se crearon los platos correctamente")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error al crear los platos")
        }
    }
}