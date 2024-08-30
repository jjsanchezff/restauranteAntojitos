import dotenv from 'dotenv';
import { Sequelize, Model, DataTypes } from 'sequelize';

dotenv.config();

// const con_sequelize = new Sequelize(
//     process.env.MYSQL_ADDON_DB,
//     process.env.MYSQL_ADDON_USER,
//     process.env.MYSQL_ADDON_PASSWORD,
//     {
//         host: process.env.MYSQL_ADDON_HOST,
//         dialect: 'mysql',
//         port: process.env.MYSQL_ADDON_PORT,
//         define: {
//             freezeTableName: true
//         }
//     }
// )

const con_sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        define: {
            freezeTableName: true
        }
    }
)


export {con_sequelize}





