const chai = require('chai');

const loggerName = 'logger-name';
const logger = require('../../index')(loggerName);

const expect = chai.expect;

describe('logger', () => {
  it('should be able to be named', () => {
    expect(logger.fields.name).to.equal(loggerName);
  });
});
