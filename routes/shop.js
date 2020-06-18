const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //default content-type is text/html, which is set automatically by Express
    res.send('<h1>Hello</h1>');
});

module.exports = router;