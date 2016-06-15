'use strict';

/**
 * @ngdoc function
 * @name udemealApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udemealApp
 */
angular.module('udemealApp')
  //.controller('MenuCtrl', ['foodFinder','service2','service3', function(menu) {
.controller('MenuCtrl', ['foodFinder','orderManager' ,function(menu,orderManager) {
    //this.item = '';
    var vm = this;

    menu.getMenu().then(function(data) {
      vm.items = data;
    });

    this.chooseItem = function(menuCategory, menuItemName){

    };

    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1) / 10;
    };
    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1) / 10;
    }
  }]);
