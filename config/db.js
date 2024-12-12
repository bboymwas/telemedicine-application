const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

});

(async () => {
    try {
        const [rows] = await pool.execute('SELECT 1');
        console.log('Database connected successfully!', rows);
    } catch (error) {
        console.error('Database connection failed:', error.message);
    } finally {
        pool.end(); // Close the pool
    }
})();
