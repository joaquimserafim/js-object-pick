# js-object-pick

Return a copy of the object only containing the specified properties

<a href="https://nodei.co/npm/js-object-pick/"><img src="https://nodei.co/npm/js-object-pick.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/js-object-pick)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/js-object-pick/blob/master/LICENSE)

## API

#### pick(object:jsObject, list_of_keys:(array || string), [*this* context])

## Usage

``` js
var pick = require('js-object-pick');
var package = require('./package.json');
var filter = pick(package, ['version', 'name']);
// filter should have only "version" & "name" props

var description = pick({desc: 'hey', value: 'Hello World'}, 'desc');
// description should be {desc: 'hey'}
```

## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit

to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
