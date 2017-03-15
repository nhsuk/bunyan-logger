Number.isNan = require('is-nan');
const assert = require('assert');
const bunyan = require('bunyan');

function defaultLogLevel() {
  return bunyan.DEBUG;
}

function getLogLevel(environment) {
  const logLevel = process.env.LOG_LEVEL;

  if (logLevel !== undefined && logLevel !== 'undefined') {
    const parsedLogLevel = parseInt(logLevel, 10);
    const logLevelName = bunyan.nameFromLevel[parsedLogLevel];
    if (logLevelName) {
      return parsedLogLevel;
    }
    if (Number.isNan(parsedLogLevel)) {
      assert(logLevelName, `${logLevel} is not a valid LOG_LEVEL`);
    } else {
      assert(logLevelName, `${parsedLogLevel} is not a valid LOG_LEVEL`);
    }
  }

  return {
    production: bunyan.INFO,
    test: bunyan.FATAL,
  }[environment] || defaultLogLevel();
}

module.exports = {
  getLogLevel,
  defaultLogLevel,
};
