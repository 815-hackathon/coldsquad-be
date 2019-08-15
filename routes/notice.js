const express = require('express');
const router = express.Router();

const Notices = require('../schemas/notice');

router.get('/all', async (req, res, next) => {
    try {
        const notices = await Notices.find();
        console.log(notices);
        res.json(notices);
    } catch (err) {
        console.log(err);
        next(err);
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const notice = await Notices.findByIdAndDelete(id);
        res.json(notice);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await Refrigerator.findByIdAndDelete(id);
        const notices = await Notices.find();
        console.log(notices);
        res.json(notices);
        res.end('삭제');
    } catch (err) {
        console.log(err);
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { name, content } = req.body;
        const newNotice = new Notices({ name, content });
        newNotice.save();
        const notices = await Notices.find();
        console.log(notices);
        res.json(notices);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

module.exports = router;