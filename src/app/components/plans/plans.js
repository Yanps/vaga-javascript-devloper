/**
 * @ngdoc function
 * @name app.component:plans
 * @description
 * # app/components/plans
 * Componente da lista de planos
 */

(function () {
  'use strict';

  angular
    .module('app')
    .component('plans', {
      templateUrl: 'app/components/plans/plans.html',
      controller: 'PlansController as $ctrl'
    });
})();
