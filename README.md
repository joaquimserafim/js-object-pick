# js-object-pick

Returns a new object only containing the specified properties

<a href="https://nodei.co/npm/js-object-pick/"><img src="https://nodei.co/npm/js-object-pick.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/js-object-pick)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/js-object-pick/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/js-object-pick/blob/master/package.json#L39)

## API
`const pick = require('js-object-pick')`

`pick(jsObject, a string or an array of strings)`


## Usage

``` js
const pick = require('js-object-pick')

const package = require('./package.json')

const filter = pick(package, ['version', 'name'])
// filter should have only "version" & "name" props

const description = pick({desc: 'hey', value: 'Hello World'}, 'desc')
// description should be {desc: 'hey'}
```


#### ISC License (ISC)
