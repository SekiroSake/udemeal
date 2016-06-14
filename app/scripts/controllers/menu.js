'use strict';

/**
 * @ngdoc function
 * @name udemealApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udemealApp
 */
angular.module('udemealApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry Pudding';
    this.img = 'strawberry-pudding.jpg';
    this.rating = 4.7;
  });
