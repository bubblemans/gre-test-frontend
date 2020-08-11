const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/', (request, response) => {
        response.render('layout', { pageTitle: 'Practice Test', template: 'essay' });
    });

    return router;
}