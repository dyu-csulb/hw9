const Account = require('./accounting');
const acct = new Account('Jeff');

acct.credit(250);
acct.describe();