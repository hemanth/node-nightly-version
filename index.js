'use strict';
const fetch = require('isomorphic-fetch');
const nightlyVersions = require('node-nightly-versions');
const osArch = `${process.platform}-${process.arch}`;
const winVerMap = {
  'win-x64':'win-x64-exe',
  'win-x86':'win-x86-exe',
  'darwin-x64':'os-x64-pkg',//darwin is os name for osx
  'darwin-x86':'os-x86-tar'
}

module.exports = () => nightlyVersions()
  .then(versions => (versions[osArch] || versions[winVerMap[osArch]]).version);
