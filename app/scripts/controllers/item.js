'use strict';

/**
 * @ngdoc function
 * @name udemealApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udemealApp
 */
angular.module('udemealApp')
  .controller('ItemCtrl', ['$stateParams','foodfinder',function ($stateParams,foodfinder) {
      var vm = this;
      foodFinder.getItem($stateParams.id).then(function(data){
        vm.data = data;
      });
  }]);
