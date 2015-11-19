"use strict";
var lib = rewire('../lib/index');

describe('UNIT sails-linking-models', () => {
  describe('modelLinks', () => {
    let reverseRouteService, result;

    beforeEach(() => {
      reverseRouteService = sinon.stub().returns(['link1', 'link2']);
      result = lib.attributes.modelLinks('controllerName', reverseRouteService);
    });

    it("should call reverseRouteService with components.", () => {
      expect(reverseRouteService).to.be.calledWithMatch({
        controller: 'controllerName.update',
        args: [undefined]
      });
    });

    it('should return an array of links of length 3', () => {
      expect(result).to.have.length(3)
        .and.to.contain.a.thing.with.keys('rel', 'link')
        .and.to.contain.a.thing.with.property('rel', 'update');
    });
  });

  describe('mixin', () => {
    const model = {};
    let result;
    before(() => {
      result = lib.mixin(model);
    });
    it('should mixin lib attributes with model attributes', () => {
      expect(result).to.eql({attributes: lib.attributes});
    })
  });
});