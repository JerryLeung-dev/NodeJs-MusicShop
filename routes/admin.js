const express = require('express');

const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');
// /admin/add-product
const products = [];

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
});

// /admin/product
router.post('/product', (req,res,next) => {
    console.log(req.body);
    products.push({albumName : req.body.albumName});
    console.log(products);
    res.redirect('/');
})

//export in this way, the exported modules will be objects. can be assessed by Object.data
module.exports.routes = router;

module.exports.products = products;