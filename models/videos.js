const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const getVideosByCourseId = async (courseId) => {
    const [rows] = await pool.query('SELECT * FROM Videos WHERE course_id = ?', [courseId]);
    return rows;
};

module.exports = { getVideosByCourseId };