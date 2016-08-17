# node-nightly-version [![Build Status](https://travis-ci.org/hemanth/node-nightly-version.svg?branch=master)](https://travis-ci.org/hemanth/node-nightly-version)

>  Get the latest node nightly version.


## Install

```
$ npm install --save node-nightly-version
```


## Usage

```js
nodeNightlyVersion()
.then(console.log) // Latest version for your OS.
.catch(console.error);
```

## CLI

```
$ npm install --global node-nightly-version
```

```
$ node-nightly-version --help

  Get the node nightly version.

  Usage
    $ node-nightly-version
    v7.0.0-nightly20160621ecc48a154d

```

P.S: If `process.env.NODEJS_ORG_NIGHTLY_MIRROR` is set, it shall pick-up that URL.

## License

MIT © [Hemanth.HM](https://h3manth.com)
