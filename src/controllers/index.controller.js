import { mesas, platos, ventas } from '../models/datos.model.js';
import { Pedido_Plato, Plato } from '../models/plato.model.js';
// import { ventas } from '../models/datos.model.js';
import { PlatoController } from './plato.controller.js';
import { Mesa } from '../models/mesa.model.js';
import { Pedido } from '../models/pedido.model.js';

// impor

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

    static async cargarRecibos(req, res) {
        const mesas2 = await Mesa.findAll()
        res.render("recibos", { allMesas: mesas2 });
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


    static async mostrarConsola(req, res) {
        try {
            console.log("datos recibidos")
            // console.log(req.body);
            const {mesaNumero, plato} = req.body
            console.log(plato)
            console.log(mesaNumero)
            
            const nuevoPedido = await Pedido.create(
                {
                    idMesa: mesaNumero,
                    estado: "pendiente",
                    tipo: "local",
                }
            )

            //nuevoPedido.

            const mesaTemp = await Mesa.findByPk(mesaNumero)

            console.log(mesaTemp)
            mesaTemp.update({
                estado: "ocupada"
            })

            plato.forEach(async item => {
                const nuevoPlato = await Plato.findByPk(item.id)
                const nuevoRegistro = await Pedido_Plato.create(
                    {
                        idPedido: nuevoPedido.idPedido,
                        idPlato: item.id,
                        cantidad: item.cantidad,
                        precioUnitario: nuevoPlato.precio
                    }
                )
                // console.log(`ID: ${item.id}, Cantidad: ${item.cantidad}`);
              });

            // const nuevoPedido = await Pedido.create(
            //     {
            //         mesa: mesaNumero,
            //         estado: "pendiente",
            //         tipo: "local"
            //     }
            // )



            // nuevoPedido.add




            res.send("Datos recibidos");
        } catch (error) {
            console.log(error);
            res.send("Error al recibir los datos");
            }
        }

    static mostrarConsola2(req, res) {
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