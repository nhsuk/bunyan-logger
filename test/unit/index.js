const chai = require('chai');
const AssertionError = require('assert').AssertionError;

const expect = chai.expect;

describe('logger', () => {
  it('should be able to be named', () => {
    const loggerName = 'logger-name';
    // eslint-disable-next-line global-require
    const logger = require('../../index')(loggerName);

    expect(logger.fields.name).to.equal(loggerName);
  });

  it('should throw an exception when no name is provided', () => {
    // eslint-disable-next-line global-require
    expect(() => { require('../../index')(); })
    .to.throw(AssertionError, 'name must not be empty');
  });

  it('should throw an exception when an empty name is provided', () => {
    // eslint-disable-next-line global-require
    expect(() => { require('../../index')(''); })
    .to.throw(AssertionError, 'name must not be empty');
  });
});
