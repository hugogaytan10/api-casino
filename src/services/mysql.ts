const mysql = require('mysql');
import dotenv from 'dotenv';
dotenv.config();
const mysqlConfig = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'test',
});
export default mysqlConfig;