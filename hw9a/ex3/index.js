var moment = require('moment'); 

console.log(`${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`)
console.log(moment("19761126", "YYYYMMDD").fromNow());
