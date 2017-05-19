/**
 * @ngdoc overview
 * @name app
 * @description
 * # app/index.js - module loader
 *
 * Arquivo responsável por injetar os módulos da aplicação
 */

(function () {
  'use strict';
  angular
    .module('app', ['ui.router']);
})();
