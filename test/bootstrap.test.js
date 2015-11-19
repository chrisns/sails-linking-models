global.chai = require('chai')
  .use(require('sinon-chai'))
  .use(require('chai-things'));
global.expect = global.chai.expect;
global.sinon = require('sinon');
global.rewire = require('rewire');
