const assert = require('assert');
const bunyan = require('bunyan');
const loggerUtils = require('./lib/loggerUtils');

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
