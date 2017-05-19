describe('userData component', function () {
  // var controller;

  beforeEach(module('app', function ($provide) {
    $provide.factory('userData', function () {
      return {
        templateUrl: 'app/userData.html'
      };
    });
  }));

  // beforeEach(angular.mock.inject(function ($controller) {
  //   controller = $controller('UserDataController');
  // }));

  it('Verifica se o componente é carregado na view', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<userData></userData>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
