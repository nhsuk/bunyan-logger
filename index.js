const loggerUtils = require('./lib/loggerUtils');
const bunyan = require('bunyan');
const assert = require('assert');

const env = process.env.NODE_ENV || 'development';

function log(name) {
  assert(name, 'name must not be empty');
  return bunyan.createLogger({
    level: loggerUtils.getLogLevel(env),
    name,
    serializers: bunyan.stdSerializers,
    streams: [{ stream: process.stdout }],
  });
}

module.exports = log;
