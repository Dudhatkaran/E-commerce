const express = require('express');
const Category = require('../Models/userSchema');
const router = express.Router();

router.post('/addcategory', async (req, res, next) => {
    try {
        const data = await Category.create(req.body);
        res.status(201).send(data);

    } catch (error) {
        res.status(400).send(error);
    }
})
router.get('/getallcategory', async (req, res, next) => {
    try {
        const data = await Category.find();
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(error);
    }
})
module.exports = router;