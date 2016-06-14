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
    this.items = [
      {
        id:'chicken-pomegranate-salad',
        name: 'Chicken Pomegranate Salad',
        img: 'chicken-pomegranate-salad.jpg',
        calories:430,
        rating:4.1
      },
      {
        id:'strawberry-pudding',
        name: 'Strawberry Pudding',
        img: 'strawberry-pudding.jpg',
        calories:280,
        rating:4.7
      },
      {
        id:'ham-goat-cheese-croissant',
        name: 'Ham and Goat Cheese Croissant',
        img: 'ham-goat-cheese-croissant.jpg',
        calories:670,
        rating:3.1
      }
    ];
  });
