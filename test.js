const moment = require('moment');

var t1 = moment('2019-08-16 23:00', 'YYYY-MM-DD HH:mm');
// var tt = moment('2019-08-17', 'YYYY-MM-DD HH:mm');
var tt = moment('2019-08-17', 'YYYY-MM-DD');
// var t2 = moment();
// const today = new Date();
// var t3 = moment(today);
// console.log(t1)
// console.log(tt.date())
// console.log(tt)

// console.log(t1);
// console.log(t2);
// console.log('////////////////////////////////////////////////////////////');
// console.log(t1.format('YYYY-MM-DD HH:mm'));
// console.log(t2.format('YYYY-MM-DD HH:mm'));
// console.log('////////////////////////////////////////////////////////////');
// console.log(moment.duration(t2.diff(t1)));
// console.log(moment.duration(t1.diff(t2)));
// console.log('////////////////////////////////////////////////////////////');
// console.log(moment.duration(t1.diff(t2)).asDays());;
// console.log(moment.duration(t2.diff(t1)).asDays());;

console.log(Math.floor(moment.duration(t1.diff(moment().format('YYYY MM DD'), 'days')).asDays()));;
console.log(moment.duration(t1.diff(moment().format('YYYY MM DD'), 'days')).asDays());;
console.log('////////////////////////////////////////////////////////////');
console.log(Math.floor(moment.duration(tt.diff(moment().format('YYYY MM DD'), 'days')).asDays()));;
console.log(moment.duration(tt.diff(moment().format('YYYY MM DD'), 'days')).asDays());;
// console.log(t1.diff(today));;
console.log(t1.diff(moment().format('YYYY MM DD'), 'days'));
console.log(tt.diff(moment().format('YYYY MM DD'), 'days'));
// console.log(moment().format('YYYY MM DD'));
// console.log()
// console.log()
