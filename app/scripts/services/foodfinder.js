'use strict';

/**
 * @ngdoc service
 * @name udemealApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udemealApp.
 */
angular.module('udemealApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
     this.getMenu = function(){
       return $.get('/menu/menu.json');
     };
  });
