# sails-linking-models

[![Build](https://travis-ci.org/chrisns/sails-linking-models.png)](https://travis-ci.org/chrisns/sails-linking-models)
[![Coverage](https://coveralls.io/repos/chrisns/sails-linking-models/badge.png)](https://coveralls.io/r/chrisns/sails-linking-models)
[![Quality](https://codeclimate.com/github/chrisns/sails-linking-models.png)](https://codeclimate.com/github/chrisns/sails-linking-models)
[![Dependencies](https://david-dm.org/chrisns/sails-linking-models.png)](https://david-dm.org/chrisns/sails-linking-models)

## Description

Ability to generate hateoas-compatible links to actions (read/update/delete) on model items.

## Install

```bash
$ npm install sails-linking-models
```

## Usage
Mixin with your sails model declarations (in /api/models/YOUR_MODEL.js) like so:

```js
   var linkingModels = require('sails-linking-models');
   var model = {
      // Your model declaration here
      };
   module.exports = linkingModels.mixin(model);
```

Inside your model declaration you can generate links by passing in a controller name and the 
reverseRouteService function:

```js
    var links = this.modelLinks(controllerName, reverseRouteService);
```

## Tests

```bash
$ npm install
$ npm test
```
