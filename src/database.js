import dotenv from 'dotenv';
import { createPool } from "mysql2/promise";

dotenv.config();

export const pool = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


export const pool2 = createPool({
    host: "local",
    port: "3306",
    user: "root",
    password: "PruebaxD147-",
    database: "restaurante"
})


