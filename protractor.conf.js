var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './client/app/e2e/PageObject/**/*.e2e-spec.js',
    './client/app/e2e/ProjectLanding/**/*.e2e-spec.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:3000',
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30001
  },
  onPrepare: function () {
    require("babel-register");
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
