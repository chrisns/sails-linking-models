"use strict";
var lib = rewire('../lib/index');

describe('UNIT sails-linking-models', () => {
  describe('modelLinks', () => {
    let reverseRouteService, result;
    before(() => {

      reverseRouteService = sinon.stub().returns('link1');
    });

    describe('without actionsArray passed in...', () => {
      beforeEach(() => {
        result = lib.attributes.modelLinks('controllerName', reverseRouteService);
      });

      it("should call reverseRouteService with components.", () => {
        expect(reverseRouteService).to.be.calledWithMatch({
          controller: 'controllerName.update',
          args: [undefined]
        });
      });


      it('should return aa links object with the expected properties', () => {
        expect(result).to.have.property('self')
        expect(result).to.have.property('update')
        expect(result).to.have.property('destroy')
      });
    });
    describe('with actionsArray passed in...', () => {
      before(() => {
        result = lib.attributes.modelLinks('controllerName', reverseRouteService, ['action1', 'action2']);
      });
      it("should use the actionsArray parameter", () => {
        expect(result).to.have.property('action1')
        expect(result).to.have.property('action2')

      });
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