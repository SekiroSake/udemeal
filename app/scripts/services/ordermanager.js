'use strict';

/**
 * @ngdoc service
 * @name udemealApp.orderManager
 * @description
 * # orderManager
 * Service in the udemealApp.
 */
angular.module('udemealApp')
  .service('orderManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var OrderSelection = {
      Monday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Tuesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Wednesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Thursday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Friday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
    };

    this.getActiveDay = function(){
      return selectedDay;
    }
    this.setActiveDay = function(day){
      selectedDay = day;
    }

    this.chooseMenuOption = function(meal, menuItem){
      OrderSelection[selectedDay][meal] = menuItem;
    };

    this.removeMenuOption = function(day, menuCategory){
      OrderSelection[day][menuCategory] = '';
    };

    this.getOrders = function(){
      return OrderSelection;
    }
  });
