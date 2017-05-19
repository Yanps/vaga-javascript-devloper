/**
 * @ngdoc function
 * @name app.controller:PlansController
 * # components/plataforms/plans-controller
 * Controller do componente plans
 */

(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlansController', PlansController);

  PlansController.$inject = ['$stateParams', '$location', 'APIService'];

  function PlansController($stateParams, $location, APIService) {
    var vm = this;
    vm.plataformSKU = $stateParams.plataform || '';
    vm.error = false;
    vm.plans = {};
    vm.loading = true;
    vm.goToUserData = goToUserData;

    listPlans();
    function listPlans() {
      return APIService.get('planos/' + vm.plataformSKU).then(function (resp) {
        var data = resp.data;
        vm.plans = data.planos;
      }, function () {
        vm.error = true;
      }).then(function () {
        vm.loading = false;
      });
    }

    function goToUserData(plan) {
      $location.path('/user-data/' + plan);
    }
  }
})();
