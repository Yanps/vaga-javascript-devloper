/**
 * @ngdoc overview
 * @name app
 * @description
 * # app/routes.js - routes
 *
 * Arquivo responsável por definir as rotas da aplicação
 */

(function () {
  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('plataforms', {
        url: '/',
        component: 'plataforms'
      })
      .state('/plans', {
        url: '/planos/:plataform',
        component: 'plans'
      })
      .state('userData', {
        url: '/user-data/:plan',
        component: 'userData'
      });
  }
})();
