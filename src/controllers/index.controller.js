import { mesas, platos, ventas } from '../models/datos.model.js';
// import { ventas } from '../models/datos.model.js';

export class IndexController {
    static cargarHome(req, res) {
        res.render("home", { allVentas: ventas });
    }

    static cargarCarta(req, res) {
        res.render("carta", { allPlatos: platos });
    }

    static cargarOrdenes(req, res) {
        res.render("ordenes", { allMesas: mesas });
    }

    static cargarRecibos(req, res) {
        res.render("recibos", { allMesas: mesas });
    }

    static registrarOrden(req, res) {
        const mesaNumero = req.query.mesa;  // Obtén el número de la mesa desde los parámetros de la URL
        // Busca la mesa seleccionada en tu array de mesas, si es necesario
        const mesaSeleccionada = mesas.find(mesa => mesa.numero == mesaNumero);
        res.render("registrar-orden", { mesa: mesaSeleccionada,allPlatos: platos});
    }


}


export default IndexController;