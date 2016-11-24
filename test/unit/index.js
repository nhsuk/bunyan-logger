const chai = require('chai');
const AssertionError = require('assert').AssertionError;

const expect = chai.expect;

describe('logger', () => {
  describe('normal operation', () => {
    it('should be able to be named', () => {
      const loggerName = 'logger-name';
      delete require.cache[require.resolve('../../index')];
      // eslint-disable-next-line global-require
      const logger = require('../../index')(loggerName);

      expect(logger.fields.name).to.equal(loggerName);
    });
  });

  describe('internal exceptions', () => {
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
});
