'use strict';
const fetch = require('isomorphic-fetch');
const nightlyVersions = require('node-nightly-versions');
const osArch = `${process.platform}-${process.arch}`;
const osVerMap = {
  'win32-x64':'win-x64-msi',
  'win32-ia32':'win-x86-msi',
  'darwin-x64':'osx-x64-pkg',//darwin is os name for osx
  'darwin-arm64':'osx-x64-pkg',
  'darwin-ia32':'osx-x86-tar',
  'linux-x64':'linux-x64',
  'linux-ia32':'linux-x86',
  'sunos-x64':'sunos-x64',
  'sunos-ia32':'sunos-x86'
}

module.exports = () => nightlyVersions()
  .then(versions => (versions[osArch] || versions[osVerMap[osArch]]).version);
