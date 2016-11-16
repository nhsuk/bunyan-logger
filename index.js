const loggerUtils = require('./lib/loggerUtils');
const bunyan = require('bunyan');
const assert = require('assert');

const env = process.env.NODE_ENV || 'development';

function log(name) {
  assert(name, 'name must not be empty');
  return bunyan.createLogger({
    name,
    serializers: bunyan.stdSerializers,
    level: loggerUtils.getLogLevel(env),
    streams: loggerUtils.getStreams(env),
  });
}

module.exports = log;
