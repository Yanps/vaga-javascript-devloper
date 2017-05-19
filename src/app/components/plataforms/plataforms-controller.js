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

  PlataformsController.$inject = [];

  function PlataformsController() {
    var vm = this;
    vm.text = 'Plataforms';
  }
})();
