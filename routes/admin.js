const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send('<html><form method="POST" action="/product"><h1>Add product</h1><input type="text" name="product"/><button type="submit">Add</button</form></html>');
});

router.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;