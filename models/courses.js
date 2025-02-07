const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const getCourses = async () => {
    const [rows] = await pool.query('SELECT * FROM Courses');
    return rows;
};

const getCourseById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM Courses WHERE id = ?', [id]);
    return rows[0];
};

module.exports = { getCourses, getCourseById };