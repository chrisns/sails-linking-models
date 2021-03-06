# sails-linking-models

[![Greenkeeper badge](https://badges.greenkeeper.io/chrisns/sails-linking-models.svg)](https://greenkeeper.io/)

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
reverseRouteService function, and, optionally, an array of controller actions to link to:

```js
   var actions =  ['action1', 'action2']; 
   var links = this.modelLinks(controllerName, reverseRouteService, actions);
```

Actions will default to the blueprint actions if none is passed in: 

```js
   ['findOne', 'update', 'destroy']
```


## Tests

```bash
$ npm install
$ npm test
```
