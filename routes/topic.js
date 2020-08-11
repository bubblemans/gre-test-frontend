const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/', (request, response) => {
        response.render('layout', { pageTitle: 'Topic', template: 'topic' });
    })

    return router;
}