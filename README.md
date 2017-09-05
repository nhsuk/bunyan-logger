# NHSUK Bunyan logger

[![GitHub Release](https://img.shields.io/github/release/nhsuk/bunyan-logger.svg)](https://github.com/nhsuk/bunyan-logger/releases/latest/)
[![npm version](https://badge.fury.io/js/nhsuk-bunyan-logger.svg)](https://badge.fury.io/js/nhsuk-bunyan-logger)
[![Greenkeeper badge](https://badges.greenkeeper.io/nhsuk/bunyan-logger.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/nhsuk/bunyan-logger.svg?branch=master)](https://travis-ci.org/nhsuk/bunyan-logger)
[![Coverage Status](https://coveralls.io/repos/github/nhsuk/bunyan-logger/badge.svg)](https://coveralls.io/github/nhsuk/bunyan-logger)
[![Known Vulnerabilities](https://snyk.io/test/github/nhsuk/bunyan-logger/badge.svg)](https://snyk.io/test/github/nhsuk/bunyan-logger)

A little library to ease the sharing of the setup of the `bunyan` logger.

An instance of a `bunyan` logger is created via the
[constructor-api](https://github.com/trentm/node-bunyan#constructor-api) and
returned.

## Install

* A specific release version (recommended). e.g via yarn:
  `yarn install git://github.com/nhsuk/bunyan-logger.git#x.x.x`
* The latest version (not recommended). e.g. via npm:
  `npm install nhsuk/bunyan-logger`
* Any of the other ways to
  [install an npm package](https://docs.npmjs.com/cli/install)

## Usage

```
const log = require('nhsuk-bunyan-logger')('LOGGER-NAME');

log.METHOD('message goes here');
```

Where `LOGGER-NAME` is the name you want for the logger.
Where `METHOD` is any of the supported Bunyan
[logger methods](https://github.com/trentm/node-bunyan#log-method-api). Check
out the [Bunyan documentation](https://www.npmjs.com/package/bunyan) for
additional information on the API.

## Environment Variables

A number of environment variables are used, as detailed below.

| Variable    | Description                                                       | Default               |
|:------------|:------------------------------------------------------------------|:----------------------|
| `NODE_ENV`  | Node environment                                                  | development           |
| `LOG_LEVEL` | Numeric [log level](https://github.com/trentm/node-bunyan#levels) | Depends on `NODE_ENV` |

A note on `LOG_LEVEL` - there are default values set depending on the
environment. However, if `LOG_LEVEL` is set this value will override any
defaults there might be.
