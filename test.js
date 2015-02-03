'use strict';

var test = require('tape');
var pick = require('./');

test('return a copy of the object only containing the specified properties',
function(assert) {
  var obj = require('./package.json');
  var newObj = pick(obj, ['version', 'name']);
  assert.deepEqual(typeof newObj, 'object');
  assert.equal(newObj.version, obj.version);
  assert.equal(newObj.name, obj.name);
  assert.end();
});

test('same test put use a string to filter with one key', function(assert) {
  var obj = require('./package.json');
  var newObj = pick(obj, 'description');
  assert.deepEqual(typeof newObj, 'object');
  assert.equal(newObj.description, obj.description);
  assert.end();
});
