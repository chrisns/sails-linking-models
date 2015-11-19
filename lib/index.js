"use strict";
var _ = require('lodash');

module.exports = {
    attributes: {
        modelLinks: function (controller) {
            const result = [];
            _.each(['findOne', 'update', 'destroy'], (action) => {
                const components = {
                    controller: controller + '.' + action,
                    args: [this.id]
                };
            result.push({link: reverseRouteService(components, false), rel: action});
        });
return result;
}
},
mixin: function(model) {
    model.attributes = model.attributes || {};
    model.attributes = _.assign(model.attributes, this.attributes);
    return model;
}
};
