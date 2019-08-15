const express = require('express');
const router = express.Router();

const Refrigerator = require('../schemas/foods');
const { getResponseData, getResponseListData } = require('./util');

// home : 모든 음식 리스트를 확인
// 보내야할 것: name, owner, createdAt, expireDate, storeDuration(storeDate), isExpire(expireDate), isStore, category, location, memo
router.get('/all', async (req, res, next) => {
    try {
        const foods = await Refrigerator.find();
        const addedFoods = getResponseListData(foods);
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
        const id = req.params.id;
        const food = await Refrigerator.findById(id);
        const addedFood = getResponseData(food);
        console.log(addedFood)
        res.json(addedFood);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// 카테고리별 음식 확인
router.get('/category/:value', async (req, res, next) => {
    try {
        const foods = await Refrigerator.find({ category: req.params.value });
        const addedFoods = getResponseListData(foods);
        console.log('category', addedFoods)
        res.json(foods);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

// 음식 추가
// name, owner, expireDate, storeDate, category, location, memo
router.post('/', async (req, res, next) => {
    try {
        const { name, owner, expireDate, storeDuration, category, location, memo } = req.body;
        const newDate = new Date();
        const storeDate = newDate.setDate(newDate.getDate() + storeDuration);
        const newFood = new Refrigerator({ name, owner, expireDate, storeDate, category, location, memo })
        newFood.save();

        const foods = await Refrigerator.find();
        const addedFoods = getResponseListData(foods);

        console.log('create', addedFoods);
        res.json(addedFoods);
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

        const foods = await Refrigerator.find();
        const addedFoods = getResponseListData(foods);

        console.log('delete', addedFoods)
        res.json(addedFoods);
    } catch (err) {
        console.log(err);
        next(err);
    }
})

module.exports = router;