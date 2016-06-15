'use strict';

/**
 * @ngdoc overview
 * @name udemealApp
 * @description
 * # udemealApp
 *
 * Main module of the application.
 */
angular
  .module('udemealApp', ['ui.router'])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'views/menu.html',
      controller:'MenuCtrl as menu'
    })
    .state('item',{
      url:'/item/:id',
      templateUrl:'views/item.html',
      controller:'ItemCtrl as item'
    })
  }]);
