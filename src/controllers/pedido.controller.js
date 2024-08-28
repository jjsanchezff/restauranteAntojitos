import { Pedido } from '../models/pedido.model.js'

//export class PedidoController {

export class PedidoController {
    static async crearPedido(req, res) {
        try {

            const { idMesa, tipo, estado, idsProducto, idsPlato } = req.body;
            console.log(`idMesa: ${idMesa}`);
            console.log(`Tipo: ${tipo}`);
            console.log(`Estado: ${estado}`);
            console.log(`idsProducto: ${idsProducto}`);
            console.log(`idsPlato: ${idsPlato}`);


            
            return res.send("Pedido creado correctamente")
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    static async obtenerUno(req, res) {
        try {
            const { id } = req.params
            const pedido = await Pedido.findByPk(id)
            res.status(200).json(pedido)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    static async obtenerTodos(req, res) {
        try {
            const pedidos = await Pedido.findAll()
            res.status(200).json(pedidos)
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}