describe('plans component', function () {
  var controller;

  beforeEach(module('app', function ($provide) {
    $provide.factory('plans', function () {
      return {
        templateUrl: 'app/plans.html'
      };
    });
  }));

  beforeEach(angular.mock.inject(function ($controller) {
    controller = $controller('PlansController');
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<plans></plans>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));

  it('Testa se o texto está correto', function () {
    var text = controller.text;
    expect(text).toBe('Plans');
  });
});
