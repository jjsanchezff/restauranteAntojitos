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


// export { platos, ventas }
export { mesas, platos, ventas }