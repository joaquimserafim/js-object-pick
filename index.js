/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const isObject = require('is.object')

module.exports = pickFn

function pickFn (obj, keys) {
  if (!isObject(obj)) {
    return {}
  }

  if (typeof keys === 'string') {
    return one(obj, keys)
  }

  const res = {}
  let i = -1

  while (++i < keys.length) {
    let key = keys[i]
    obj[key] && (res[key] = obj[key])
  }

  return res
}

function one (obj, key) {
  const res = {}

  obj[key] && (res[key] = obj[key])

  return res
}
