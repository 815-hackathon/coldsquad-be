const express = require('express');

const router = express.Router();

// home : 모든 음식 리스트를 확인
router.get('/all', (req, res, next) => {
    res.send('food all')
});

// 하나의 음식정보를 확인
router.get('/:id', (req, res, next) => {
    res.send(`food id:${req.params.id}`);
})

// 카테고리별 음식 확인
router.get('/category/:value', (req, res, next) => {
    res.send(`food category: ${req.params.value}`);
})

// 음식 추가
router.post('/', (req, res, next) => {

})

// 음식 삭제
router.delete('/:id', (req, res, next) => {

})


/*
router.get('/', (req, res, next) => {

})
*/
module.exports = router;