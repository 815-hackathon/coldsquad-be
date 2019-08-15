const express = require('express');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const flash = require('connect-flash');
const cors = require('cors');

const connect = require('./schemas/index');
const foodRouter = require('./routes/food');
const noticeRouter = require('./routes/notice');

const app = express();
connect();

app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(cors());

app.use('/food', foodRouter);
app.use('/notice', noticeRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;