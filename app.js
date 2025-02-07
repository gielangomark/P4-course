require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/courses', coursesRouter);

// Log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Handle 404 Not Found
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});