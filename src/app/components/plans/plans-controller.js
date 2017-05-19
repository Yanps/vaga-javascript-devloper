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

  PlansController.$inject = [];

  function PlansController() {
    var vm = this;
    vm.text = 'Plans';
  }
})();
