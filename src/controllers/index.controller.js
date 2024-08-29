import { mesas, platos, ventas } from '../models/datos.model.js';
import { Plato } from '../models/plato.model.js';
// import { ventas } from '../models/datos.model.js';
import { PlatoController } from './plato.controller.js';
import { Mesa } from '../models/mesa.model.js';

export class IndexController {
    static cargarHome(req, res) {
        res.render("home", { allVentas: ventas });
    }

    static async cargarCarta(req, res) {
        const platos2 = await Plato.findAll();
        res.render("carta", { allPlatos: platos2 });
    }

    static async cargarOrdenes(req, res) {
        const mesas2 = await Mesa.findAll()
        res.render("ordenes", { allMesas: mesas2 });
    }

    static cargarRecibos(req, res) {
        res.render("recibos", { allMesas: mesas });
    }

    static async registrarOrden(req, res) {
        const platos3 = await Plato.findAll();
        const mesaNumero = req.query.mesa;  // Obtén el número de la mesa desde los parámetros de la URL
        // Busca la mesa seleccionada en tu array de mesas, si es necesario
        const mesas2 = await Mesa.findAll()
        const mesaSeleccionada = mesas2.find(mesa => mesa.numero == mesaNumero);
        res.render("registrar-orden", { mesa: mesaSeleccionada,allPlatos: platos3});
    }

    static cargarPedidos(req, res) {
        res.render("pedidos");
    }


    static mostrarConsola(req, res) {
        try {
            console.log("datos recibidos")
            console.log(req.body);
            console.log(req.body);
            res.send("Datos recibidos");
        } catch (error) {
            console.log(error);
            res.send("Error al recibir los datos");
            }
        }

}


export default IndexController