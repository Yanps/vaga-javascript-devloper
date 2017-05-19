/**
 * @ngdoc function
 * @name app.component:userData
 * @description
 * # app/components/userData
 * Componente p/ o formulário de envio de dados
 */

(function () {
  'use strict';

  angular
    .module('app')
    .component('userData', {
      templateUrl: 'app/components/user-data/userdata.html',
      controller: 'UserDataController as $ctrl'
    });
})();
