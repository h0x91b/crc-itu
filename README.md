node-redis-crc16
=======

crc16 CCIT Xmodem hash which working properly with redis-cluster


Forked from:
crc-itu [![Build Status](https://travis-ci.org/damphat/crc-itu.png?branch=master)](https://travis-ci.org/damphat/crc-itu)
=======

Install:

```
npm install node-redis-crc16 --save
```

Usage:

```
var crc16 = require('node-redis-crc16').crc16;

// with string and encoding
var ret = crc16('0d0103588990501766460026', 'hex');
console.log(ret.toString(16)); // 7bf9

// with buffer
var buff = new Buffer('0d0103588990501766460026', 'hex');
var ret = crc16(buff);
console.log(ret.toString(16)); // 7bf9
```
