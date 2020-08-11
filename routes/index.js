const express = require('express');

const topicRoute = require('./topic');
const essayRoute = require('./essay');

const router = express.Router();

module.exports = (params) => {
    router.get('/', (request, response) => {
        response.render('layout', { pageTitle: 'GRE Test', template: 'index' });
    });

    router.use('/topic', topicRoute(params));
    router.use('/essay', essayRoute(params));
    return router;
}