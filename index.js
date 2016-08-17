'use strict';
const fetch = require('isomorphic-fetch');
const nightlyVersions = require('node-nightly-versions');
const nightlyURL = (process.env.NODEJS_ORG_NIGHTLY_MIRROR || 
  'https://nodejs.org/download/nightly') + '/index.tab';
const osArch = `${process.env._system_name.toLowerCase()}-${process.arch}`;
const winVerMap = {
  'win-x64':'win-x64-exe',
  'win-x86':'win-x86-exe',
  'osx-x64':'osx-x64-pkg'
}

module.exports = () => nightlyVersions()
  .then(versions => (versions[osArch] || versions[winVerMap[osArch]]).version);
