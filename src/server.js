// //solicitud del paquete
// const express = require('express');
// //import express from "express";
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// //import ejs from "ejs";

// //crear app
// const app = express();

// const favicon = require('serve-favicon');
// //import favicon from "serve-favicon";
// var path = require('path');
// //import path from "path";

// app.use(bodyParser.urlencoded({extended: true}));
// //app.use(express.urlencoded({extended: true}));
// app.set('view engine', 'ejs');
// //app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// //app.use(favicon(path.join(__dirname, 'public', 'favicon-32x32.png')));

// Importa los paquetes necesarios
import express from 'express';
import ejs from 'ejs';
import favicon from 'serve-favicon';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtén el nombre del archivo actual y el directorio del módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crea una instancia de la aplicación Express
const app = express();

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configura el directorio de vistas
app.set('views', path.join(__dirname, 'views'));

// Configura el middleware para analizar los datos de los formularios
app.use(express.urlencoded({ extended: true }));

// Configura el directorio para archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configura el favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var mesas = [
    {
        idMesa: 1,
        numero: 1,
        capacidad: 2,
        estado: 0
    },
    {
        idMesa: 2,
        numero: 2,
        capacidad: 5,
        estado: 1
    },
    {
        idMesa: 3,
        numero: 3,
        capacidad: 3,
        estado: 1
    }
];

var platos = [
    {
        idPlatilllo: 1,
        nombre: "Ají de gallina",
        descripcion: "descripcion aji de gallina",
        categoria: "Plato de fondo",
        precio: 10.50,
        stock: 8
    },
    {
        idPlatilllo: 2,
        nombre: "Ceviche de pescado",
        descripcion: "descripcion ceviche de pescado descripcion ceviche de pescado",
        categoria: "Entrada",
        precio: 5.00,
        stock: 10
    },
    {
        idPlatilllo: 3,
        nombre: "Mazamorra",
        descripcion: "descripcion mazamorra",
        categoria: "postre",
        precio: 3.50,
        stock: 5
    }
]

// var ventas = [
//     {
//         idVenta: 1, montoTotal: 20.50, metodoPago: "Efectivo", Estado: "Pagado", FechaVenta: "27/8/2024"
//     },
//     {
//         idVenta: 2, montoTotal: 47.00, metodoPago: "Tarjeta", Estado: "Pagado", FechaVenta: "28/8/2024"
//     },
//     {
//         idVenta: 3, montoTotal: 10.50, metodoPago: "Efectivo", Estado: "Pagado", FechaVenta: "28/8/2024"
//     },
// ]

var ventas = [
    {idVenta: 1, montoTotal: 14.05, metodoPago: 'PayPal', Estado: 'Pendiente', FechaVenta: '2024-08-24'},
    {idVenta: 2, montoTotal: 78.57, metodoPago: 'Tarjeta', Estado: 'Cancelada', FechaVenta: '2024-08-20'},
    {idVenta: 3, montoTotal: 50.99, metodoPago: 'Tarjeta', Estado: 'Cancelada', FechaVenta: '2024-08-26'},
    {idVenta: 4, montoTotal: 54.2, metodoPago: 'PayPal', Estado: 'Pendiente', FechaVenta: '2024-08-20'},
    {idVenta: 5, montoTotal: 44.91, metodoPago: 'Tarjeta', Estado: 'Cancelada', FechaVenta: '2024-08-23'},
    {idVenta: 6, montoTotal: 64.09, metodoPago: 'PayPal', Estado: 'Cancelada', FechaVenta: '2024-08-27'},
    {idVenta: 7, montoTotal: 72.31, metodoPago: 'PayPal', Estado: 'Pendiente', FechaVenta: '2024-08-28'},
    {idVenta: 8, montoTotal: 68.56, metodoPago: 'Efectivo', Estado: 'Cancelada', FechaVenta: '2024-08-22'},
    {idVenta: 9, montoTotal: 26.44, metodoPago: 'Efectivo', Estado: 'Pendiente', FechaVenta: '2024-08-25'},
    {idVenta: 10, montoTotal: 34.0, metodoPago: 'Efectivo', Estado: 'Cancelada', FechaVenta: '2024-08-28'},
    {idVenta: 11, montoTotal: 17.05, metodoPago: 'Tarjeta', Estado: 'Completada', FechaVenta: '2024-08-22'},
    {idVenta: 12, montoTotal: 21.6, metodoPago: 'PayPal', Estado: 'Completada', FechaVenta: '2024-08-21'},
    {idVenta: 13, montoTotal: 40.18, metodoPago: 'Tarjeta', Estado: 'Completada', FechaVenta: '2024-08-18'},
    {idVenta: 14, montoTotal: 94.49, metodoPago: 'PayPal', Estado: 'Cancelada', FechaVenta: '2024-08-20'},
    {idVenta: 15, montoTotal: 70.9, metodoPago: 'PayPal', Estado: 'Pendiente', FechaVenta: '2024-08-18'},
    {idVenta: 16, montoTotal: 65.9, metodoPago: 'PayPal', Estado: 'Completada', FechaVenta: '2024-08-24'},
    {idVenta: 17, montoTotal: 82.83, metodoPago: 'Tarjeta', Estado: 'Completada', FechaVenta: '2024-08-27'},
    {idVenta: 18, montoTotal: 96.64, metodoPago: 'Efectivo', Estado: 'Cancelada', FechaVenta: '2024-08-23'},
    {idVenta: 19, montoTotal: 19.25, metodoPago: 'Efectivo', Estado: 'Pendiente', FechaVenta: '2024-08-21'},
    {idVenta: 20, montoTotal: 71.52, metodoPago: 'Efectivo', Estado: 'Completada', FechaVenta: '2024-08-18'}
];


//get - home
app.get("/", function(req, res){
    //imprimiendo request
    //console.log(req);

    //REESPUESTA A LA SOLICITUD
    res.render("home", { allVentas: ventas });
});

//get - orden
app.get("/ordenes", function(req, res){
    //REESPUESTA A LA SOLICITUD
    //res.send("aqui pagina de contacto");
    res.render("ordenes", {allMesas: mesas});
});

//get - pedidos
app.get("/pedidos", function(req, res){
    //REESPUESTA A LA SOLICITUD
    //res.send("aqui pagina de contacto");
    res.render("pedidos", {allMesas: mesas});
});

app.post("/contacto", function(req, res){
    //asignar valores del form a variables
    var numeroUno = Number(req.body.numero1);
    var numeroDos = Number(req.body.numero2);
    var total = numeroUno + numeroDos;

    console.log("Los numeros enviados en el metodo post son: " + numeroUno + " y " + numeroDos);
    console.log("La sumatoria es: ", total);
    

    //redireccionar a gracias
    res.render("contacto");
})

//get - carta
app.get("/carta", function(req, res){
    //REESPUESTA A LA SOLICITUD
    //res.send("aqui pagina de contacto");
    res.render("carta", {allPlatos: platos});
});

//get - recibos
app.get("/recibos", function(req, res){
    //REESPUESTA A LA SOLICITUD
    //res.send("aqui pagina de contacto");
    res.render("recibos", {allMesas: mesas});
});

//get - registrar-pedido
app.get('/registrar-orden', (req, res) => {
    const mesaNumero = req.query.mesa;  // Obtén el número de la mesa desde los parámetros de la URL
    // Busca la mesa seleccionada en tu array de mesas, si es necesario
    const mesaSeleccionada = mesas.find(mesa => mesa.numero == mesaNumero);

    // Renderiza la página de registrar-pedido con la información de la mesa seleccionada
    res.render('registrar-orden', { mesa: mesaSeleccionada,allPlatos: platos});
});

//Listen: escuchar solicitud al puerto 3000
app.listen(3000, function(){
    console.log("servidor iniciado en el puerto 3000");
});