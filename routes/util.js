const moment = require('moment');

exports.getResponseListData = (foods) => {
    const addedFoods = [];
    foods.forEach((food) => {
        const { _id, name, owner, createdAt, expireDate, storeDate, category, location, memo } = food;
        const storeDuration = storeDate.diff(moment().format('YYYY MM DD'), 'days');
        let isExpire = true;
        if (expireDate) {
            isExpire = expireDate.diff(moment().format('YYYY MM DD'), 'days') >= 0 ? true : false;
        }
        const isStore = storeDuration >= 0 ? true : false;
        addedFoods.push({ _id, name, owner, createdAt, expireDate, storeDuration, category, location, memo, isExpire, isStore })
    })
    return addedFoods;
}

exports.getResponseData = (food) => {
    const { _id, name, owner, createdAt, expireDate, storeDate, category, location, memo } = food;
    const storeDuration = storeDate.diff(moment().format('YYYY MM DD'), 'days');
    let isExpire;
    if (expireDate) {
        isExpire = expireDate.diff(moment().format('YYYY MM DD'), 'days') >= 0 ? true : false;
    }
    const isStore = storeDuration >= 0 ? true : false;
    const addedFood = { _id, name, owner, createdAt, expireDate, storeDuration, category, location, memo, isExpire, isStore };
    return addedFood;
}