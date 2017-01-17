/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const pick = require('.')

const obj = {a: 1, b: 2, c: 3}

test('returns a copy of the object only containing the specified properties',
  function (assert) {
    assert.deepEqual(pick(obj, ['a', 'c']), {a: 1, c: 3})
    assert.end()
  }
)

test('should return one prop when is not passed an array with the filter keys',
  function (assert) {
    assert.deepEqual(pick(obj, 'a'), {a: 1})
    assert.end()
  }
)

test('using "pick.one" to get one given property', function (assert) {
  assert.deepEqual(pick.one(obj, 'b'), {b: 2})
  assert.end()
})

test('run object checks', function (assert) {
  assert.deepEqual(pick.one(null, 'b'), {})
  assert.deepEqual(pick(null, ['b']), {})
  assert.end()
})
