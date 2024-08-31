import { Usuario } from "../models/usuario.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Whitelist } from "../models/whitelist.model.js"
import { Rol } from "../models/rol.js"
// import datosMOdel, { mesas } from "../models/datos.model.js"

import { ventas } from "../models/datos.model.js"
export class AuthController {
    static cargarLogin(req, res) {
        res.render('login')
    }
    static auth(req, res) {
        const { user, pass } = req.body
        //console.log(req.body)
        console.log(user + " " + pass)
        
        
        res.send("Datos recibidos")
        
    }


    static registro(req, res) {
        res.render('register')
    }

    static async registrarUsuario(req, res) {
        const { dni, nombres, apellidos, email, pass } = req.body
        
        const userValido = await Whitelist.findOne({ where: { dni: dni } })
        
        if (userValido === null) {
            return res.status(400).send("El usuario no se encuentra en la lista permitida")
        }


        const userExistente = await Usuario.findOne({ where: { dni: dni } })
        if (userExistente !== null) {
            return res.status(400).send("El usuario ya se encuentra registrado")
        }
        
        const hashedPassword = await bcrypt.hash(pass, 10)
        
        const rolUse = await Rol.findOne({ where: { nombre: userValido.rol } })

        console.log(rolUse.dataValues)
        await Usuario.create({
            dni,
            nombres,
            apellidos,
            email,
            password: hashedPassword,
            estado: 1,
            idRol: rolUse.idRol

        })

        res.send("Usuario creado exitosamente")
    }
    static async logearUsuario(req, res) {
        const { user, pass } = req.body

        const userExistente = await Usuario.findOne({ where: { dni: user } })
        if (userExistente === null) {
            return res.status(400).send("El usuario no existe")
        }
        
        const isValid = await bcrypt.compare(pass, userExistente.password)

        if (!isValid) {
            return res.status(400).send("Contraseña incorrecta")
        }


        // Obtencion del token
        const token = jwt.sign({ dni: userExistente.dni }, process.env.SECRET, { expiresIn: '1h' })
        res.cookie('acces_token', token, { 
            httpOnly: true, 
            sameSite: 'strict', 
            maxAge: 1000 * 60 * 60 })
        //.send({ user: userExistente, token: token })


        res.render('home', {allVentas: ventas})  
        
    }

    static async cargaHome(req, res) {
        const token = req.cookies.acces_token
        if(!token){
            return res.status(401).send("No autorizado")
        }

        try {
            const data = jwt.verify(token, process.env.SECRET)
            console.log(data) 
        } catch (error) {
            return res.status(401).send("No autorizado")
        }

        res.render('home')
    }
}