// Component Test Setup


var mockCssModules = require("mock-css-modules");

mockCssModules.register(['.sass', '.scss']);

require('babel-register')();
require('babel-polyfill');

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

window.PUBLIC_URI = '/';

if (typeof global.Node === 'undefined') {
  global.Node = document.defaultView.Node;
}

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
