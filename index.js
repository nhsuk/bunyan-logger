const loggerUtils = require('./lib/loggerUtils');
const bunyan = require('bunyan');

const env = process.env.NODE_ENV || 'development';

function log(name) {
  return bunyan.createLogger({
    name,
    serializers: bunyan.stdSerializers,
    level: loggerUtils.getLogLevel(env),
    streams: loggerUtils.getStreams(env),
  });
}

module.exports = log;
