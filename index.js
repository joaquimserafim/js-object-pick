/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const isObject = require('is.object')

var pick = module.exports = pickFn

pick.one = function one (obj, key) {
  if (!isObject(obj)) {
    return {}
  }

  const res = {}

  obj[key] && (res[key] = obj[key])

  return res
}

function pickFn (obj, keys) {
  if (!isObject(obj)) {
    return {}
  }

  const res = {}
  let i = -1

  while (++i < keys.length) {
    let key = keys[i]
    obj[key] && (res[key] = obj[key])
  }

  return res
}
