# NHSUK bunyan splunk logger

[![Build Status](https://travis-ci.org/nhsuk/bunyan-logger.svg?branch=master)](https://travis-ci.org/nhsuk/bunyan-logger)
[![Coverage Status](https://coveralls.io/repos/github/nhsuk/bunyan-logger/badge.svg)](https://coveralls.io/github/nhsuk/bunyan-logger)
[![Known Vulnerabilities](https://snyk.io/test/github/nhsuk/bunyan-logger/badge.svg)](https://snyk.io/test/github/nhsuk/bunyan-logger)

A little library to allow the sharing of the setup of the `splunk-bunyan-logger` between apps.

A number of environment variables are used, as detailed below.

| Variable                         | Description                                                                            | Default                  | Required        |
|:---------------------------------|:---------------------------------------------------------------------------------------|:-------------------------|-----------------|
| `NODE_ENV`                       | node environment                                                                       | development              |                 |
| `SPLUNK_HEC_TOKEN`               | [HTTP Event Collector token](http://dev.splunk.com/view/event-collector/SP-CAAAE7C)    |                          | In `production` |
| `SPLUNK_HEC_ENDPOINT`            | [HTTP Event Collector endpoint](http://dev.splunk.com/view/event-collector/SP-CAAAE7H) |                          | In `production` |
| `LOG_LEVEL`                      | [bunyan log level](https://github.com/trentm/node-bunyan#levels)                       | Depends on `NODE_ENV`    |                 |

[require-environment-variables](https://www.npmjs.com/package/require-environment-variables)
is used to check for the existance of required environment variables and will
thrown an exception should they not be present.
