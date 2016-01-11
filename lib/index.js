"use strict";
var _ = require('lodash');

module.exports = {
  attributes: {
    modelLinks: function (controller, reverseRouteService, actions) {
      const result = {};
      actions = actions || ['findOne', 'update', 'destroy'];
      _.each(actions, (action) => {
        let key = action === 'findOne' ? 'self' : action;
        const components = {
          controller: controller + '.' + action,
          args: [this.id]
        };
        result[key] = reverseRouteService(components, true);
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