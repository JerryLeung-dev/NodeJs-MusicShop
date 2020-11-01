const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    //default content-type is text/html, which is set automatically by Express
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products});
});

module.exports = router;