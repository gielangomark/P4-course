const express = require('express');
const router = express.Router();
const { listCourses, searchCourses } = require('../controllers/coursesController');

router.get('/', listCourses);
router.get('/search', searchCourses); // Menambahkan route untuk pencarian AJAX

module.exports = router;