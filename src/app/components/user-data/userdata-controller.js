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

  UserDataController.$inject = [];

  function UserDataController() {
    var vm = this;
    vm.text = 'User data';
  }
})();
