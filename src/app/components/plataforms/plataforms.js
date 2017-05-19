/**
 * @ngdoc function
 * @name app.component:plataforms
 * @description
 * # app/components/plataforms
 * Componente da lista de plataformas
 */

(function () {
  'use strict';

  angular
    .module('app')
    .component('plataforms', {
      templateUrl: 'app/components/plataforms/plataforms.html',
      controller: 'PlataformsController as $ctrl'
    });
})();
