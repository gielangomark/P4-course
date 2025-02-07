const express = require('express');
const router = express.Router();
const { showCourseDetail } = require('../controllers/coursesController');

router.get('/:id', showCourseDetail);

module.exports = router;