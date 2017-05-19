/**
 * @ngdoc function
 * @name app.controller:UserDataController
 * # components/plataforms/userData-controller
 * Controller do componente userData
 */

(function () {
  'use strict';

  angular
    .module('app')
    .controller('UserDataController', UserDataController);

  UserDataController.$inject = ['$log', '$stateParams', 'APIService'];

  function UserDataController($log, $stateParams, APIService) {
    var vm = this;
    var plan = $stateParams.plan || '';

    vm.disabled = true; // Impede o formulário de ser enviado antes de os dados do plano serem carregados
    vm.planInfo = '';
    vm.sendData = sendData;

    planInfo();
    function planInfo() {
      return APIService.get('planos/' + plan).then(function (resp) {
        var data = resp.data;
        vm.planInfo = data.planos;
        vm.disabled = false; // Habilita os dados do formulário
      });
    }

    function sendData(formData) {
      $log.log('DADOS DO USUÁRIO', formData);
      $log.log('DADOS DO PLANO', angular.toJson(vm.planInfo));
    }
  }
})();
