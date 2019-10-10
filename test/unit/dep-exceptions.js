const chai = require('chai');

const { expect } = chai;

describe('dependency exceptions', () => {
  let token;
  let endpoint;

  before('setup env vars', () => {
    token = process.env.SPLUNK_HEC_TOKEN;
    endpoint = process.env.SPLUNK_HEC_ENDPOINT;

    process.env.SPLUNK_HEC_TOKEN = 'string';
    process.env.SPLUNK_HEC_ENDPOINT = 'https://not.real:8088';
    process.env.NODE_ENV = 'production';
  });
  after('reset env vars', () => {
    process.env.SPLUNK_HEC_TOKEN = token;
    process.env.SPLUNK_HEC_ENDPOINT = endpoint;
    process.env.NODE_ENV = '';
  });

  it('should not bubble up an exception when the host is unreachable', () => {
    // eslint-disable-next-line global-require
    const logger = require('../../index')('dep-exception-tester');

    setTimeout(() => {
      logger.info('something');
    }, 500);

    expect(logger).to.not.be.equal(undefined);
  });
});
