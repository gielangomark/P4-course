const { getCourses, getCourseById } = require('../models/courses');
const { getVideosByCourseId } = require('../models/videos');

const listCourses = async (req, res) => {
    console.log('Listing courses');
    try {
        let courses = await getCourses();
        const query = req.query.query;
        if (query) {
            courses = courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()));
        }
        res.render('index', { courses, query });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

const searchCourses = async (req, res) => {
    console.log('Searching courses');
    try {
        let courses = await getCourses();
        const query = req.query.query;
        if (query) {
            courses = courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()));
        }
        res.json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const showCourseDetail = async (req, res) => {
    console.log(`Showing course detail for ID: ${req.params.id}`);
    try {
        const courseId = req.params.id;
        const course = await getCourseById(courseId);
        if (!course) {
            return res.status(404).send('Course not found');
        }
        const videos = await getVideosByCourseId(courseId);
        res.render('courseDetail', { course, videos });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

module.exports = { listCourses, searchCourses, showCourseDetail };