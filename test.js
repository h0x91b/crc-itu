var crc = require('./');
var assert = require('assert');

assert.equal(crc.crc16(Buffer.from('123456789')).toString(16), '31c3');
assert.equal(crc.crc16(Buffer.from('привет')) % 16384, 7365);
assert.equal(crc.crc16(Buffer.from('nht.reach.accounts:زووم')) % 16384, 4107);

console.log('DONE!!!!!!!')
