import { Usuario } from "../models/usuario.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class AuthController {
    static cargarLogin(req, res) {
        res.render('login')
    }
    static auth(req, res) {
        //console.log(req.body)
        const { user, pass } = req.body
        console.log(user + " " + pass)


        res.send("Datos recibidos")
        
    }


    static registro(req, res) {
        res.render('register')
    }

    static async registrarUsuario(req, res) {
        const { dni, nombres, apellidos, email, pass } = req.body
        
        const user = await Usuario.findOne({ where: { dni: dni } })
        
        

        //console.log(user)
        // if (user !== null) {
        //     console.log(user.dataValues)
        //     return res.status(400).send("El usuario ya existe")
        // }
        
        const hashedPassword = await bcrypt.hash(pass, 10)
        

        user.update({dni: dni, nombres: nombres, apellidos: apellidos, email: email, password: hashedPassword})


        // Usuario.create({
        //     dni,
        //     nombres,
        //     apellidos,
        //     email,
        //     password: hashedPassword
        // }).save()

        res.send("Usuario creado exitosamente")
    }
}