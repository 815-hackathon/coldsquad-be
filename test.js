const connect = require('./schemas/index');
connect();
const refrigerator = require('./schemas/foods');
const notice = require('./schemas/notice');

const newdate = new Date();
newdate.setDate(newdate.getDate() + 7);

// let newFood = new refrigerator({ name: 'cocacola', owner: 'aaaa', expireDate: newdate, storeDate: Date(), category: 'drink', location: '냉장고', memo: '마시지마' });
// newFood.save();
// let newFood = new refrigerator({ name: 'cocacola', owner: 'circus4', expireDate: newdate, category: 'drink', location: '냉장고', memo: '마시지마' });
// newFood.save((err, account) => {
//     if (err) return console.error(err);
// });
// let newNotice = new notice({ name: 'circus', content: '코카콜라 마시지마' });
// newNotice.save((err, account) => {
//     if (err) return console.error(err);
// });

const test = async function () {
    const food = await refrigerator.findOne({ _id: '5d545c002026a366e82bdab8' });
    const aa = new Date();
    console.log(food.expireDate)
    console.log(food.expireDate.getDate())
    console.log(aa.getDate())
    console.log(food.expireDate.getDate() - aa.getDate())
    // console.log((food.expireDate.getTime() - food.createdAt.getTime()) / (1000 * 60 * 60 * 24))
    // console.log(food._id);
    // console.log(food.storeDate);
    // console.log(food.name);
    // console.log(food.owner);
    // console.log(food.expireDate);
    // console.log(food.category);
    // console.log(food.location);
    // console.log(food.memo);
    console.log(food.createdAt);
}
test();