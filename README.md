# NHSUK bunyan logger

[![Build Status](https://travis-ci.org/nhsuk/bunyan-logger.svg?branch=master)](https://travis-ci.org/nhsuk/bunyan-logger)
[![Coverage Status](https://coveralls.io/repos/github/nhsuk/bunyan-logger/badge.svg)](https://coveralls.io/github/nhsuk/bunyan-logger)
[![Known Vulnerabilities](https://snyk.io/test/github/nhsuk/bunyan-logger/badge.svg)](https://snyk.io/test/github/nhsuk/bunyan-logger)

A little library to ease the sharing of the setup of the `bunyan` logger.

An instance of a `bunyan` logger is created via the [constructor-api](https://github.com/trentm/node-bunyan#constructor-api) and returned.


## Installation

* For a specific release version (recommended): `npm install git://github.com/nhsuk/bunyan-logger.git#x.x.x` or
* For the very latest version (not recommended): `npm install nhsuk/bunyan-logger` or
* Any of the other ways to [install an npm package](https://docs.npmjs.com/cli/install)

## Usage

```
const log = require('nhsuk-bunyan-logger')('LOGGER-NAME');

log.METHOD('message goes here');
```

Where `LOGGER-NAME` is the name you want for the logger.
Where `METHOD` is any of the supported bunyan [logger methods](https://github.com/trentm/node-bunyan#log-method-api).
Check out the [bunyan documentation](https://www.npmjs.com/package/bunyan) for additional information on the API.

## Environment Variables

A number of environment variables are used, as detailed below.

| Variable                         | Description                                                                            | Default                  | Required        |
|:---------------------------------|:---------------------------------------------------------------------------------------|:-------------------------|-----------------|
| `NODE_ENV`                       | node environment                                                                       | development              |                 |
| `LOG_LEVEL`                      | [bunyan log level](https://github.com/trentm/node-bunyan#levels)                       | Depends on `NODE_ENV`    |                 |

A note on `LOG_LEVEL` - there are default values set depending on the environment. However, if `LOG_LEVEL` is set this value will override any defaults there might be. 
