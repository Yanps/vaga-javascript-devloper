/**
 * @ngdoc function
 * @name app.controller:PlataformsController
 * # components/plataforms/plataforms-controller
 * Controller do componente plataforms
 */

(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlataformsController', PlataformsController);

  PlataformsController.$inject = ['APIService', '$location'];

  function PlataformsController(APIService, $location) {
    var vm = this;
    vm.error = false;
    vm.plataforms = {};
    vm.loading = true;
    vm.goToPlans = goToPlans;

    listPlataforms();

    function listPlataforms() {
      return APIService.get('plataformas').then(function (resp) {
        var data = resp.data;
        vm.plataforms = data.plataformas;
      }, function () {
        vm.error = true;
      }).then(function () {
        vm.loading = false;
      });
    }

    function goToPlans(sku) {
      $location.path('/planos/' + sku);
    }
  }
})();
