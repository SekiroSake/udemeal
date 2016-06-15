'use strict';

/**
 * @ngdoc function
 * @name udemealApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udemealApp
 */
angular.module('udemealApp')
  .controller('OrderCtrl', ['orderManager',function (orderManager) {
    this.list = orderManager.getOrders();
  }]);
