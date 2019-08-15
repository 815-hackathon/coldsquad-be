const Refrigerator = require('../schemas/foods');

exports.getResponseListData = (foods) => {
    const today = new Date().getDate();
    const addedFoods = [];
    foods.forEach((food) => {
        const { _id, name, owner, createdAt, expireDate, storeDate, category, location, memo } = food;
        const storeDuration = storeDate.getDate() - today;
        const isExpire = (food.expireDate.getDate() - today) >= 0 ? true : false;
        const isStore = storeDuration >= 0 ? true : false;
        addedFoods.push({ _id, name, owner, createdAt, expireDate, storeDuration, category, location, memo, isExpire, isStore })
    })
}