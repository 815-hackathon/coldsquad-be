const express = require('express');
const router = express.Router();

const Refrigerator = require('../schemas/foods');

// home : 모든 음식 리스트를 확인
// 보내야할 것: name, owner, createdAt, expireDate, storeDuration(storeDate), isExpire(expireDate), isStore, category, location, memo
router.get('/all', async (req, res, next) => {
    try {
        let foods = await Refrigerator.find();
        let today = new Date().getDate();
        const addedFoods = [];
        foods.forEach((food) => {
            const { name, owner, createdAt, expireDate, storeDate, category, location, memo } = food;
            const isExpire = (food.expireDate.getDate() - today) >= 0 ? true : false;
            const isStore = food.storeDuration >= 0 ? true : false;
            addedFoods.push({ name, owner, createdAt, expireDate, storeDuration: storeDate.getDate() - today, category, location, memo, isExpire, isStore })
        })
        console.log(addedFoods);
        res.json(addedFoods);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

// 하나의 음식정보를 확인
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const food = await Refrigerator.findById(id);
        res.json(food);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// 카테고리별 음식 확인
router.get('/category/:value', async (req, res, next) => {
    try {
        const foods = await Refrigerator.find({ category: req.params.value });
        res.json(foods);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// 음식 추가
// name, owner, expireDate, storeDate, category, location, memo
router.post('/', (req, res, next) => {
    try {
        const { name, owner, expireDate, storeDuration, category, location, memo } = req.body;
        const newDate = new Date();
        const storeDate = newDate.setDate(newDate.getDate() + storeDuration);
        const newFood = new Refrigerator({ name, owner, expireDate, storeDate, category, location, memo })
        newFood.save();
        res.send(newFood);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// 음식 삭제
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        await Refrigerator.findByIdAndDelete(id);
        res.end('성공');
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// router.get('/', async (req, res, next) => {
//     const food = await Refrigerator.findOne({ _id: '5d5439a68b9c977830046c0d' });
//     res.json(food);
// })


/*
router.get('/', (req, res, next) => {

})
*/
module.exports = router;