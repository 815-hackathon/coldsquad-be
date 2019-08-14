const connect = require('./schemas/index');
connect();
const refrigerator = require('./schemas/foods');
const notice = require('./schemas/notice');

// let newFood = new refrigerator({ name: 'cocacola', owner: 'circus', expireDate: Date(), storeDate: Date(), category: 'drink', location: '냉장고', memo: '마시지마' });
// newFood.save((err, account) => {
//     if (err) return console.error(err);
// });
let newNotice = new notice({ name: 'circus', content: '코카콜라 마시지마' });
newNotice.save((err, account) => {
    if (err) return console.error(err);
});
