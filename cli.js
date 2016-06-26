#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nodeNightlyVersion = require('./');

var cli = meow([
	'Usage',
	'  $ node-nightly-version',
	'  v7.0.0-nightly20160621ecc48a154d',
]);

nodeNightlyVersion()
.then(console.log)
.catch(console.error);
