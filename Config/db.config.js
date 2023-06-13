

import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();



// create the connection to database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT

})

db.connect();

export default db;