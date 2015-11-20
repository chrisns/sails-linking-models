"use strict";
var _ = require('lodash');

module.exports = {
  attributes: {
    modelLinks: function (controller, reverseRouteService, actions) {
      const result = [];
      actions = actions || ['findOne', 'update', 'destroy'];
      _.each(actions, (action) => {
        const components = {
          controller: controller + '.' + action,
          args: [this.id]
        };
        result.push({link: reverseRouteService(components, false), rel: action});
      });
      return result;
    }
  },
  mixin: function (model) {
    model.attributes = model.attributes || {};
    model.attributes = _.assign(model.attributes, this.attributes);
    return model;
  }
};