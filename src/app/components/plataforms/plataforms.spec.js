describe('plataforms component', function () {
  // var controller;

  beforeEach(module('app', function ($provide) {
    $provide.factory('plataforms', function () {
      return {
        templateUrl: 'app/plataforms.html'
      };
    });
  }));

  // beforeEach(angular.mock.inject(function ($controller) {
  //   controller = $controller('PlataformsController');
  // }));

  it('testa se o componente carrega corretamente na view', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<plataforms></plataforms>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
