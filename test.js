var crc = require('./');
var assert = require('assert');

assert.equal(crc.crc16(new Buffer('123456789')).toString(16), '31c3');
assert.equal(crc.crc16(new Buffer('привет')) % 16384, 7365);
assert.equal(crc.crc16(new Buffer('nht.reach.accounts:زووم')) % 16384, 4107);

console.log('DONE!!!!!!!')
